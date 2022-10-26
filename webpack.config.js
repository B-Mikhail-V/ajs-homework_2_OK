const path = require('path');
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // context: path.resolve(__dirname, 'src'),
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    }, 
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader'
                ] 
            },
            {
                test: /\.html$/,
                use: [
                    
                ]
            }
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin(),
    ]

}