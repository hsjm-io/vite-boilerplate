const { readFileSync } = require('fs')
const { resolve } = require('path')
const express = require('express')
const consola = require('consola')

const createServer = async () => {
	const app = express()

	app.use(require('compression')())
	app.use(require('serve-static')(resolve(__dirname, '../dist/client'), {
		index: false
	}))

	app.use('*', async (req, res) => {

		const url = req.originalUrl
		try {

		  	// 1. Read index.html
			let template = readFileSync(resolve(__dirname, '../dist/client/index.html'), 'utf-8')

			let { render } = require('../dist/server/entry-server.js')

            const manifest = require('../dist/client/ssr-manifest.json')
			const [appHtml, preloadLinks] = await render(url, manifest)

			const html = template
				.replace(`<!--preload-links-->`, preloadLinks)
				.replace(`<!--app-html-->`, appHtml)

			res.status(200).set({ 'Content-Type': 'text/html' }).end(html)

		} catch (e) {
			consola.error(e)
			res.status(500).end(e.stack)
		}
	})

	app.listen(3000, () => {
		consola.success(`Started the server. Listening on port ${3000}`)
	})
}

createServer()