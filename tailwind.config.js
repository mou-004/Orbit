module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { ink: "#101728", midnight: "#080d1c", violet: "#9c8cff", mint: "#9debd4" }, fontFamily: { sans: ["Arial", "sans-serif"] }, animation: { float: "float 7s ease-in-out infinite", orbit: "spin 24s linear infinite", twinkle: "twinkle 4s ease-in-out infinite" }, keyframes: { float: { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-14px)" } }, twinkle: { "0%,100%": { opacity: ".25" }, "50%": { opacity: "1" } } } } },
  plugins: [],
};
