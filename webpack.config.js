var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: { presets: ['react', 'es2015', 'stage-0'] } ,
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
};
