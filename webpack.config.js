var config = {
  context: __dirname + "/app",
  entry: "./index.js",

  output: {
    filename: "bundle.js",
    path: __dirname + "/app/dist",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      }
    ],
  }
};
module.exports = config;
