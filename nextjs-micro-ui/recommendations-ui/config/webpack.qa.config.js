const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/bootstrap.tsx',
    mode: 'production',
    devServer: {
        static: './public',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    output: {
        filename: '[name].[contenthash].js',
        publicPath: 'https://microfrontend-passport.qa.euromonitor.com/qa/recommendations-ui/',
        chunkFilename: '[name].[contenthash].js',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'recommendations_ui',
            filename: 'remoteEntry.js',
            exposes: {
                './RecommendationsApp': './src/App',
                './RecommendationsComponent': './src/components/RecommendationsComponent',
            },
            shared: {
                react: {
                    singleton: true,
                    eager: true,
                    requiredVersion: "^18.2.0",
                },
                'react-dom': {
                    singleton: true,
                    eager: true,
                    requiredVersion: "^18.2.0",
                },
                'react/jsx-runtime': {
                    singleton: true,
                    eager: true,
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};