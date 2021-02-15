const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  mode: 'development',
  devServer: {
    port: 3030,
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    historyApiFallback: true,
    open: true,
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '../src'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
        exclude: /node_modules/,
      },
      {
        enforce: 'pre',
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: [/\.sass$/, /\.scss$/],
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/', 'index.html'),
      filename: 'index.html',
      scriptLoading: 'defer',
      inject: true
    }),
    new webpack.DefinePlugin({
      "process.env": "{}"
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
