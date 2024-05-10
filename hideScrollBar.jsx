// hideScrollBar.js

const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addUtilities }) {
    const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
            display: 'none',
        },
        '.no-scrollbar': {
            'scrollbar-width': 'none',
        },
    };

    addUtilities(newUtilities, ['responsive', 'hover']);
});
