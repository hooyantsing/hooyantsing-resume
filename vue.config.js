const config = require("./config");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/resume/" : "/",
  devServer: {
    port: config.DEV_PORT,
  },
};
