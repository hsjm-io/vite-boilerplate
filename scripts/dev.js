const { readFileSync } = require('fs')
const { resolve } = require('path')
const { execSync } = require('child_process')
const { createServer: createViteServer} = require('vite')
const express = require('express')
const consola = require('consola')

//--- Compute GitPod server parameters.
const gpPortUrl = port => execSync(`gp url ${port}`).toString().replace('https:\/\/', '')
const host = process.env.HOST ?? '0.0.0.0'
const port = process.env.PORT ?? 3000
const url = process.env.GITPOD_WORKSPACE_ID ? gpPortUrl(port) : `${host}:${port}`
const hmrPort = 443
const hmrProtocol = 'wss'
const hmrHost = url.replace('https://','wss://')

async function createServer() {
	const app = express()
  
	// Create vite server in middleware mode. This disables Vite's own HTML
	// serving logic and let the parent server take control.
	//
	// If you want to use Vite's own HTML serving logic (using Vite as
	// a development middleware), using 'html' instead.
	const vite = await createViteServer({
		root: process.cwd(),
	  	server: { middlewareMode: 'ssr' },
	})

	// use vite's connect instance as middleware
	app.use(vite.middlewares)


	app.use('*', async (req, res) => {
		const url = req.originalUrl
	  
		try {
		  // 1. Read index.html
		  let template = readFileSync(resolve(__dirname, '../index.html'), 'utf-8')
	  
		  // 2. Apply vite HTML transforms. This injects the vite HMR client, and
		  //    also applies HTML transforms from Vite plugins, e.g. global preambles
		  //    from @vitejs/plugin-react-refresh
		  template = await vite.transformIndexHtml(url, template)
	  
		  // 3. Load the server entry. vite.ssrLoadModule automatically transforms
		  //    your ESM source code to be usable in Node.js! There is no bundling
		  //    required, and provides efficient invalidation similar to HMR.
		  const { render } = await vite.ssrLoadModule('/src/entry-server.js')
	  
		  // 4. render the app HTML. This assumes entry-server.js's exported `render`
		  //    function calls appropriate framework SSR APIs,
		  //    e.g. ReactDOMServer.renderToString()
		  const [appHtml, preloadLinks] = await render(url)
	  
		  // 5. Inject the app-rendered HTML into the template.
		  const html = template
			.replace(`<!--preload-links-->`, preloadLinks)
			.replace(`<!--app-html-->`, appHtml)
	  
		  // 6. Send the rendered HTML back.
		  res.status(200).set({ 'Content-Type': 'text/html' }).end(html)

		} catch (e) {
		  // If an error is caught, let vite fix the stracktrace so it maps back to
		  // your actual source code.
		  vite.ssrFixStacktrace(e)
		  consola.error(e)
		  res.status(500).end(e.message)
		}
	  })
  
	app.listen(3000)
  }
  
  createServer()