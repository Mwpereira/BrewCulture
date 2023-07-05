/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [],
    theme: {
        extend: {
            colors: {
                'brown-0': '#eedcd9',
                'brown-1': '#D1A472',
                'brown-5': '#AC562A',
                'orange-00': '#FFFBF2',
                'orange-01': '#FEF5E6',
                'orange-0': '#D1A472',
                'orange-1': '#FFE0AD',
                'orange-2': '#FFDA5F',
                'orange-3': '#FFAB55',
                'orange-4': '#EBAA5F',
                'orange-5': '#722F0D',
                'orange-10': '#722F0E',
            },
            margin: {
                18: '4.75rem',
            },
            screens: {},
        },
        fontFamily: {
            poppins: "'Nunito', serif",
        },
    },
}
