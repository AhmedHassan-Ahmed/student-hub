/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0B3D66",
                secondary: "#1565C0",
                accent: "#4FA8DE",

                bg: "#F3F8FD",
                surface: "#FFFFFF",

                text: {
                    primary: "#1B2A3A",
                    secondary: "#5C7089",
                },
            },
            fontFamily: {
                main: ["Cairo", "sans-serif"],
                Headers: ["Outfit", "Inter"],
                contant: ["Manrope", "Inter"],
            },
        },
    },
    plugins: [],
};