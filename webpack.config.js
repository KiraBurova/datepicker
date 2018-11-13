const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_PATH = path.join(__dirname, 'src');

module.exports = {
    mode: 'development',
    context: SRC_PATH,
    entry: [
        './index.js'
    ],
    output: {
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        minimize: true,
                        modules: false
                    }
                }]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader'
                    },
                    postLoaders: {
                        html: 'babel-loader'
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    devServer: {
        port: 8000,
        host: '0.0.0.0',
        disableHostCheck: true,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            minify: {},
            chunksSortMode: 'none'
        }),
        new VueLoaderPlugin()
    ]
};