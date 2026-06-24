module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        polen: {
          dark: "#0f1f3d",
          blue: "#1d4c8f",
          soft: "#f3f6fc",
          slate: "#64748b",
        },
      },
      boxShadow: {
        soft: "0 20px 45px rgba(15, 31, 61, 0.08)",
      },
    },
  },
  plugins: [],
};
