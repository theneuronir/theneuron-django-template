/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "postcss-rtlcss": {
      safeBothPrefix: true,
    },
  },
};

module.exports = config;
