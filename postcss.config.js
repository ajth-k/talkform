const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),
  ],
};
