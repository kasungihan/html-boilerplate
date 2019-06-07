const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT; 
console.log(`Your port is ${port}`);
module.exports = {
    mode: 'production',
    entry: './src/js/main.js',
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Araliya Cabs',
        filename: 'index.html',
        template: 'src/index.html',
        meta: {
            'theme-color': '#4285f4'// Will generate: <meta name="theme-color" content="#4285f4">
        },
        /* minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
        } */
        
      })
    ]
};