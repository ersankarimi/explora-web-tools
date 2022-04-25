module.exports = {
    content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
    theme: {
        extend: {
            colors: {
                // * Neutral
                'white-100': '#FAFAFA',
                'white-80': 'rgba(250,250,250,.8)',
                'white-65': 'rgba(250,250,250,.65)',

                // * Primary
                'main-bg-dark-1': '#181C27',
                'main-bg-dark-2': '#394253',
                'main-card-dark-1': '#2C3341',
                'main-card-dark-2': '#313949',
                'main-sidebar-dark': '#313949',

                // * Accent
                'purple-accent': '#5219CF',
                'coral-accent': '#FFAB91',

                // * Stroke
                'item-stroke': 'rgba(49,57,73,0.5)'
            },
            boxShadow: {
                'item-shadow': '-10px -10px 20px rgba(72, 80, 99, 0.26), 10px 10px 20px #262C37',
                'sidebar-shadow':
                    '-10px -10px 20px rgba(57, 66, 83, 0.35), 10px 10px 20px rgba(24, 28, 39, 0.35)',
                'hover-dropdown-shadow':
                    '-10px -10px 20px rgba(57, 66, 83, 0.35), 10px 10px 20px rgba(24, 28, 39, 0.35)',
                'active-dropdown-shadow':
                    '5px -5px 10px rgba(72, 80, 99, 0.1), 5px 5px 10px rgba(24, 28, 39, 0.35), inset -2px -2px 4px rgba(72, 80, 99, 0.35), inset 5px 5px 5px #1D222E;',
                'header-shadow':
                    '-10px -10px 20px rgba(57, 66, 83, 0.35) 10px 10px 20px rgba(24, 28, 39, 0.35)'
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                inter: ['Inter', 'sans-serif']
            }
        }
    },
    plugins: []
}
