/* eslint-disable global-require */

module.exports = {
    mode: 'jit',
    purge: {
        content: [
            'content/**/**.md',
            'pages/**/*.vue',
            'layouts/**/*.vue',
            'components/**/*.vue',
        ],
    },
    darkMode: false,
    theme: {
        fontFamily: {
            serif: [
                'Kazimir',
                'serif',
            ],
            sans: [
                '"Brandon Grotesque"',
                'sans-serif',
            ],
        },
        extend: {
            borderWidth: {
                16: '16px',
            },
            maxWidth: {
                prose: '65ch',
            },
            colors: {
                green: {
                    50: '#f6faf5',
                    100: '#edf5eb',
                    200: '#d2e7cc',
                    300: '#b7d9ad',
                    400: '#81bc70',
                    500: '#4b9f32',
                    600: '#448f2d',
                    700: '#387726',
                    800: '#2d5f1e',
                    900: '#254e19',
                },
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        h1: {
                            'text-align': 'center',
                            'font-size': theme('fontSize.5xl'),
                            'font-weight': theme('fontWeight.bold'),
                            'margin-top': theme('margin.8'),
                            'margin-bottom': theme('margin.6'),
                        },
                        h2: {
                            'font-size': theme('fontSize.4xl'),
                            'margin-top': theme('margin.6'),
                            'margin-bottom': theme('margin.4'),
                        },
                        h3: {
                            'font-size': theme('fontSize.3xl'),
                            'margin-top': theme('margin.6'),
                            'margin-bottom': theme('margin.4'),
                        },
                        h4: {
                            'font-size': theme('fontSize.2xl'),
                            'margin-top': theme('margin.6'),
                            'margin-bottom': theme('margin.4'),
                        },
                        h5: {
                            'font-size': theme('fontSize.xl'),
                            'margin-top': theme('margin.6'),
                            'margin-bottom': theme('margin.4'),
                        },
                    },
                },
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};