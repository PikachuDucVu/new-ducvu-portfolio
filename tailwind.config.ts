/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins"],
      },
      backgroundImage: {
        "instagram-gradient":
          "linear-gradient(135deg, #833AB4, #C13584, #E1306C, #FD1D1D, #FCAF45)",
      },
    },
  },
  plugins: [],
};
