var path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
var HrmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devServer: {
        contentBase: path.join('public'),
        publicPath: '/',
        compress: true,
        port: 8080
    },
    mode: 'none',
    entry: [ './src/app.js' ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  {
                    loader: 'sass-loader',
                    options: {
                      implementation: require('sass'),
                      fiber: require('fibers'),
                      indentedSyntax: true // optional
                    }
                  }
                ]
              },
              {
                test: /\.css$/,
                use: [ 'vue-style-loader', 'css-loader']
              }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HrmlWebpackPlugin({
            template: "./public/index.html",
            inject: 'body'
        })
    ]
}