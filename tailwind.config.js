
const isDev = process.env.NODE_ENV !== 'production'

module.exports = {

    //--- Enable 'Just-In-Time' compilation in `development` mode.
    mode: isDev ? 'jit' : undefined,
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
           
    //--- Add Tailwind plugins.
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('tailwind-scrollbar'),
        require("tailwind-gradient-mask-image"),
        require('tailwindcss-elevation'),
        require('tailwindcss-hero-patterns'),
        require('tailwindcss-border-gradients'),
        require('tailwindcss-brand-colors'),
    ],

    theme: {
        extend: {

            //--- Add negative z-index.
            zIndex: {
             '-10': '-10',
            },

            //--- Set brand font family.
            fontFamily: {
                sans: ["'Poppins'", 'ui-sans-serif'],
                mdi: ["'Material Icons'"],
                fa5: ["'Font Awesome'"]
            },

            //--- Define main theme color.
            colors: {
                'brand': {
                    '50': '#fffdf6', 
                    '100': '#fffcee', 
                    '200': '#fef7d3', 
                    '300': '#fdf2b9', 
                    '400': '#fce985', 
                    '500': '#fbdf50', 
                    '600': '#e2c948', 
                    '700': '#bca73c', 
                    '800': '#978630', 
                    '900': '#7b6d27'
                },

                'on-brand': {
                    '50': '#f5f5f5', 
                    '100': '#eaebec', 
                    '200': '#cbcccf', 
                    '300': '#abaeb3', 
                    '400': '#6d7179', 
                    '500': '#2e3440', 
                    '600': '#292f3a', 
                    '700': '#232730', 
                    '800': '#1c1f26', 
                    '900': '#17191f'
                },

                'contrast': {
                    '50': '#fdf4f6', 
                    '100': '#fbeaec', 
                    '200': '#f5cad0', 
                    '300': '#eea9b3', 
                    '400': '#e2697a', 
                    '500': '#d52941', 
                    '600': '#c0253b', 
                    '700': '#a01f31', 
                    '800': '#801927', 
                    '900': '#681420'
                },

                'on-brand': {
                    '50': '#f5f5f5', 
                    '100': '#eaebec', 
                    '200': '#cbcccf', 
                    '300': '#abaeb3', 
                    '400': '#6d7179', 
                    '500': '#2e3440', 
                    '600': '#292f3a', 
                    '700': '#232730', 
                    '800': '#1c1f26', 
                    '900': '#17191f'
                },

                'base': {
                    '50': '#f5f6f6', 
                    '100': '#ebecee', 
                    '200': '#ced0d4', 
                    '300': '#b1b3ba', 
                    '400': '#767b86', 
                    '500': '#3b4252', 
                    '600': '#353b4a', 
                    '700': '#2c323e', 
                    '800': '#232831', 
                    '900': '#1d2028'
                },

                'on-base': {
                    '50': '#fefefe', 
                    '100': '#fdfdfe', 
                    '200': '#fafbfc', 
                    '300': '#f7f9fb', 
                    '400': '#f2f4f7', 
                    '500': '#eceff4', 
                    '600': '#d4d7dc', 
                    '700': '#b1b3b7', 
                    '800': '#8e8f92', 
                    '900': '#747578'
                },
            },
        }
    }
}