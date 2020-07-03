const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      //ES6 转ES5 语法
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      //解析CSS
      {
        test: /\.css$/,
        use: [ 'vue-style-loader', 'css-loader' ]
      },
      //解析图片 和媒体文件
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      //配置Vue相关的loader
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/public/index.html'
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  devServer: {
    port: 9000,
    open:true,
    quiet:true
  },
  devtool:'cheap-module-eval-source-map'
};