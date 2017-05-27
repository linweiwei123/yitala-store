/**
 * Created by Administrator on 2016/11/24.
 */
var webpackMerge = require('webpack-merge');
var helpers = require('./helpers');
var commonConfig = require('./webpack.common.js');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
const AotPlugin = require('@ngtools/webpack').AotPlugin;


const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

module.exports = webpackMerge(commonConfig, {
    // entry: {
    //     main: './src/main-aot.ts'
    // },
    entry: {
        main:['./src/uni/app.server.ts','./src/uni/server-aot.ts']
    },

    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        filename: 'server.js'
    },

    module: {
        rules: [
            {
                test: /\.ts/,
                loaders: [
                    '@ngtools/webpack'
                ],
                exclude: [/\.(spec|e2e)\.ts$/]
            }
        ]
    },
    plugins: [
        new AotPlugin({
            tsConfigPath:path.resolve(__dirname, '..')+'/tsconfig-uni.json',
            entryModule:helpers.root('src/app/app.module#AppModule')
        }),
        new ExtractTextPlugin('[name].css')
    ],

    devServer: {
        historyApiFallback: true,
        hot: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 300
        },
        proxy: [
            {
                context: ['/api/**'],
                target: 'http://localhost:8080',
                secure: false
            }
        ]
    }
});
