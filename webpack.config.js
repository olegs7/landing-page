const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: "./src/index.js", // bundle's entry point
    output: {
        path: path.resolve(__dirname, 'dist'), // output directory
        filename: "[name].js", // name of the generated bundle
        assetModuleFilename: 'assets/[name][ext]',
    },
    module: {
    rules: [
        {
            test: /\.scss$/,
            use: ['style-loader','css-loader','sass-loader']
        }, 
        {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
            type: 'asset/resource'
        },
    ]
},
     plugins : [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject : "body",
            scriptLoading: "blocking",
        })
    ]
};