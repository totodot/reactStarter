const HtmlWebPackPlugin = require('html-webpack-plugin');
const StyleLintWebpackPlugin = require('stylelint-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

const styleLintPlugin = new StyleLintWebpackPlugin();

module.exports = {
  devtool: 'source-map',
  entry: './src/app.js',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              // modular styles
              // modules: true,
              // importLoaders: 1,
              // localIdentName: "[name]_[local]_[hash:base64]",
              // minimize: true
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [htmlPlugin, styleLintPlugin],
  devServer: {
    overlay: true,
  },
};
