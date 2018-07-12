const webpack = require('webpack');

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
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}