const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

var config = {
  entry: "./src/index.tsx",
  plugins: [
    new CleanWebpackPlugin(["dist/build"]),
    new HtmlWebpackPlugin({
      template: "src/templates/index.html"
    })
  ],
  output: {
    path: __dirname + "/dist",
    filename: "build/[name].[contenthash].js",
    publicPath: "/"
  },
  resolve: {
    modules: ["src", "node_modules"],
    extensions: [".ts", ".tsx", ".js", ".scss"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              minimize: true,
              localIdentName: "[local]___[hash:base64:5]"
            }
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: [__dirname + "/src"]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "build/[hash].[ext]" }
          }
        ]
      }
    ]
  },
  devServer: {
    proxy: {
      "/": {
        target: "http://localhost:5000"
      }
    }
  }
};

module.exports = (env, argv) => {
  config.plugins.push(
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(argv.mode)
      }
    })
  );
  if (argv.mode === "development") {
    config.devtool = "inline-source-map";
  }
  if (argv.mode === "production") {
  }
  return config;
};
