const livros = require('../database')
const read = require('readline-sync')

const listarLivrosNaoLidos = () =>{
    const opcaoInicial = read.question('Deseja ordenar por livros não lidos? S/N ').toUpperCase()
    if(opcaoInicial === 'S'){
      const livrosLidos = livros.filter(livro => livro.leu === false)
      console.table(livrosLidos)
    } else
      console.log('Obrigada por participar!')
  }

  module.exports = listarLivrosNaoLidos