const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
    publicPath: '/'
  },

  target: "web",
  devServer: {
    port: "5001",
    static: ["./public"],
    open: true,
    hot: true,
    liveReload: true,
    historyApiFallback: true,
  },
  resolve: {
    //might need to alter some stuff so it's cool with css
    extensions: [".js", ".jsx", ".json", ".ts", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options:{
            presets: ['@babel/react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader'],
        exclude: /node_modules/
       }
    ],
  },
};