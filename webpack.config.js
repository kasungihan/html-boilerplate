const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");

/* const dotenv = require('dotenv');
dotenv.config(); */

module.exports = {
    mode: 'production',
    entry: './src/js/main.js',
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
		rules: [
			{
				test: /\.(html)$/,
				use: {
				  loader: 'html-loader',
				}
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'img',
						},
					}
				],
			},	
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: "style-loader"
					}, 
					{
						loader: "css-loader"
					}, 
					{
						loader: "sass-loader",
					}
				]
			},
			/* {
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
				  fallback: 'style-loader',
				  use: ['css-loader', 'sass-loader', 'css-loader']
				})
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
				  fallback: "style-loader",
				  use: "css-loader"
				})
			} */
		]
	},
    plugins: [
		//new ExtractTextPlugin("css/styles.css"),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
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