const path = require("path");
const webpack = require("webpack");


  (module.exports = {
    //The entry point is the root of the bundle and the beginning of the dependency graph, so give it the relative path to the client's code
    entry: "./assets/js/script.js",
    //bundled code to a folder that we specify. It is common and best practice to put your bundled code into a folder named dist
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "main.bundle.js",
    },
    plugins: [
      //must tell webpack to make exceptions for these variables
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
      }),
    ],
    //in which we want webpack to run. By default, webpack wants to run in production mode
    mode: "development",
  });
