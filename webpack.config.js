const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
    resolve: {
        extensions: ['.js', '.svg']
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inlineSource: '.(js|css)$' // embed all javascript and css inline
        }),
        new HtmlWebpackInlineSourcePlugin()
    ]
};