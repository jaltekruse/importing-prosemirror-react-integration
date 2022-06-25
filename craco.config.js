const path = require("path");
const webpack = require("webpack");
module.exports = {
  webpack: {
    alias: {
      'react':  path.resolve(__dirname, "node_modules/react/")
    },
    plugins: {
      add: [
        new webpack.DefinePlugin({
          process: {env: {}}
        })
      ]
    }
  }
}
