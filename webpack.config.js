const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  return {
    entry: './src/index.jsx',
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
      filename: 'bundle.js',
    },
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src'),
      },
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      static: './',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader'],
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    'postcss-preset-env',
                  ],
                },
              },
            },
          ],
        },
        {
          test: /\.scss$/i,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    'postcss-preset-env',
                  ],
                },
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve('./src/index.html'),
      }),
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
  };
};
