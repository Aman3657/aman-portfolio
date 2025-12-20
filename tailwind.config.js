/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                neon: {
                    blue: "#00f3ff",
                    purple: "#bc13fe",
                },
                dark: {
                    bg: "#0a0a0a",
                    card: "#1a1a2e",
                }
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
            },
            boxShadow: {
                'neon-blue': '0 0 10px rgba(0, 243, 255, 0.5), 0 0 20px rgba(0, 243, 255, 0.3)',
                'neon-purple': '0 0 10px rgba(188, 19, 254, 0.5), 0 0 20px rgba(188, 19, 254, 0.3)',
            }
        },
    },
    plugins: [],
}
