const path = require('path');

module.exports = {
  entry: './main.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    publicPath: '/dist/',
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};
