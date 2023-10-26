/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Quicksand", "sans-serif"],
    },
    extend: {
      fontSize: {
        "11px": "0.688rem",
        "13px": "0.813rem",
        "15px": "0.938rem",
        "17px": "1.063rem",
      },
      colors: {
        primary: "#1E293B",
        omag: "#a4366b",
        imprimer: "#2e8bc0",
        importer: "#74bdcb",
        tertiary: "#94A3B8",
        body: "#666666",
        "body-light": "#AAAAAA",
        lightgrey: "#f1f5f9",
        "section-gray": "#F8F9F9",
        border: "#E0E0E0",
        success: "#3DB57F",
        warning: "#F4BF00",
        danger: "#D30505",
        white: "#FFFFFF",
      },
      borderRadius: {
        card: "0.313rem",
      },
      customClass:
        "md:mb-0 justify-self-end text-white bg-imprimer font-medium rounded-lg text-sm px-5 py-2.5 text-center",
    },
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
