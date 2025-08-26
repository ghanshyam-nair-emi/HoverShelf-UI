const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/bootstrap.tsx',
    mode: 'development',
    devServer: {
        port: 3004,
        static: './public',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
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
        publicPath: 'http://localhost:3004/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'search_ui',
            filename: 'remoteEntry.js',
            exposes: {
                './SearchApp': './src/App',
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
                '@emotion/react': {
                    singleton: true,
                    eager: true,
                    requiredVersion: "^11.14.0",
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};