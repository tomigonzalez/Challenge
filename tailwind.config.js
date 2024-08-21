/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-letters-title": "#2B3445",
        "gray-letters": "#7D879C",
        "bg-chip-green": "#D3FFF5",
        "text-chip-green": "#1CB59C",
        "bg-chip-yellow": "#FFF8E5",
        "text-chip-yellow": "#FFB800",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #0D5287 0%, #187DCA 21%, #05AACE 42%, #04D2C6 63%, #26E4C7 79%)",
      },
      fontFamily: {
        "open-sans": ['"Open Sans"', "sans-serif"],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
      },
    },
  },
  plugins: [],
};
