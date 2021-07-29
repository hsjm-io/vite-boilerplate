
//--- Import utils.
import { defineConfig } from 'windicss/helpers'

//--- Define and export config.
export default defineConfig({

    extract: {
        include: ['index.html', 'src/**/*.{vue,html,jsx,tsx}'],
        exclude: ['node_modules/**/*', '.git/**/*'],
    },

    plugins: [
        require('windicss/plugin/line-clamp'),
        require('windicss/plugin/typography')
    ],

    theme: {
        extend: {
            colors: {

                'brand': '#FBDF50',
                'on-brand': '#ECEFF4',

                'base': '#3B4252',
                'on-base': '#ECEFF4',
            },

            fontFamily: {
                sans: ['Poppins', 'ui-sans-serif']
            }
        }
    }
    
})