const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: "style-loader",
                        options: { injectType: "singletonStyleTag" }
                    },
                    "css-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
        alias: {
            '@Utils': path.resolve(__dirname, './src/utils/'),
            '@Components': path.resolve(__dirname, './src/components/')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/assets/index.html' })
    ],
    devServer:{
        open: true,
        liveReload: true,
        compress: true,
        port: 9000,
        static: {
            directory: './dist'
        },
        client: {
            // logging: 'info'
        }
    }
}