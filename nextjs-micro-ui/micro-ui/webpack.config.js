const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/bootstrap.tsx',
    mode: 'development',
    devServer: {
        port: 3001,
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
        ],
    },
    output: {
        publicPath: 'http://localhost:3001/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'micro_ui',
            filename: 'remoteEntry.js',
            exposes: {
                './App': './src/App',
                './MicroComponent': './src/components/MicroComponent',
            },
            shared: {
                react: {
                    singleton: true,
                    eager: true,
                    requiredVersion: false,
                    strictVersion: false
                },
                'react-dom': {
                    singleton: true,
                    eager: true,
                    requiredVersion: false,
                    strictVersion: false
                },
                'react/jsx-runtime': {
                    singleton: true,
                    eager: true,
                    requiredVersion: false
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};