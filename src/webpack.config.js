const path = require("path");
const StaticSiteGeneratorPlugin = require("static-site-generator-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Ajout du plugin HtmlWebpackPlugin

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "build"),
		libraryTarget: "umd",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	plugins: [
		new StaticSiteGeneratorPlugin({
			paths: ["/"],
		}),
		new HtmlWebpackPlugin({
			// Ajout du plugin HtmlWebpackPlugin
			template: "./index.html", // Spécifie le fichier HTML de base à utiliser comme modèle
		}),
	],
	resolve: {
		fallback: {
			fs: false,
			path: false,
		},
	},
	mode: "production",
};
