const webpack = require('webpack');

/*
    entry: Ponto de entrada de leitura
    output: Onde irá gerar a saida
    devServer: Config do server para a livereload e config afins
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
   } 
}