const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");
const webpack = require("webpack");


const config ={
    //The entry point is the root of the bundle and the beginning of the dependency graph, so give it the relative path to the client's code
    entry: {
      app: "./assets/js/script.js",
      events: "./assets/js/events.js",
      schedule: "./assets/js/schedule.js",
      tickets: "./assets/js/tickets.js"
    },
    //bundled code to a folder that we specify. It is common and best practice to put your bundled code into a folder named dist
      output: {
        filename: "[name].bundle.js",
        path: __dirname + "/dist",
    
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                esModule: false,
                name(file) {
                  return '[path][name].[ext]';
                },
                publicPath: function(url) {
                  return url.replace('../', '/assets/');
                }
              }
            },
            {
              loader: 'image-webpack-loader'
            }
          ]
        }
      ]
    },
    plugins: [
      //must tell webpack to make exceptions for these variables
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: "static", // the report outputs to an HTML file in the dist folder
      })
    ],
    //in which we want webpack to run. By default, webpack wants to run in production mode
    mode: "development",
  };
  
module.exports = config;