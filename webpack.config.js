const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
let FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const SocialTags = require('social-tags-webpack-plugin')

const dotenv = require('dotenv');
dotenv.config();

module.exports = {
	mode: 'production',
	devtool: false,
    entry: './src/js/main.js',
    output: {
        filename: 'js/main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	performance: {
		hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
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
				test: /\.(sass|scss|css)$/,
				use: [
					//MiniCssExtractPlugin.loader,
					"style-loader",
					"css-loader",
					"sass-loader"
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
		new HtmlWebpackPlugin({
			//title: 'Example - Home',
			filename: 'index.html',
			template: path.resolve(__dirname, 'src/index.html'),
			hash: true,
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
			
		}),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			//path: path.resolve(__dirname, 'dist/css/'),
      		//publicPath: 'dist',
			filename: 'style.css',
		}),
		new FaviconsWebpackPlugin({
			logo:'./src/img/logo.png',
			prefix: 'img/icons-[hash]/',
		}),
		new SocialTags({
			appUrl: 'http://example.com/',
			facebook: {
			  'fb:app_id': "123456789",
			  'og:url': "http://example.com/page.html",
			  'og:type': "website",
			  'og:title': "Content Title",
			  'og:image': './src/img/test.jpg',
			  'og:description': "Description Here",
			  'og:site_name': "Site Name",
			  'og:locale': "en_US",
			  'og:article:author': "",
			},
			twitter: {
			  "twitter:card": "summary",
			  "twitter:site": "@site_account",
			  "twitter:creator": "@individual_account",
			  "twitter:url": "http://example.com/page.html",
			  "twitter:title": "Content Title",
			  "twitter:description": "Content description less than 200 characters",
			  "twitter:image": './src/img/test.jpg'
			},
		}),
	],
	resolve: {
		alias: {
		  '@scss': path.resolve(__dirname, 'src/scss'),
		  '@img': path.resolve(__dirname, 'src/img'),
		  '@': path.resolve(__dirname, 'src')
		}
	  }
};