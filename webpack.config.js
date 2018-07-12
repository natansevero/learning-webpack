const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

/*
    entry: Ponto de entrada de leitura
    output: Onde irá gerar a saida
    devServer: Config do server para a livereload e config afins
    
    loaders: São tipo pipes por onde os arquivos passam
    Cada presica:
        test: que tipo de arquivo ele irá carregar
        loader: Qual o loader será usado
        exclude: Não quero que ele leia os arquivos daqui
        query: O que ele deve interpretar   
            presets: O que ele vai aplicar para fazer a tradução
            plugins: Definir algum plugins para alguma interpretação em especial

*/

module.exports = {
    entry: './ex/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    plugins: [
       new ExtractTextPlugin('app.css') 
    ],
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            },

            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }
        ]
    }
}