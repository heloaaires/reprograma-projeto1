const livros = require('../database')
const read = require('readline-sync')

const listarRecomendados = () =>{
    const opcaoInicial = read.question('Deseja ordenar por livros recomendados? S/N ').toUpperCase()
    if(opcaoInicial === 'S'){
      const livrosRecomendados = livros.filter(livro => livro.recomenda === true && livro.leu === true)
      console.table(livrosRecomendados)
    } else
      console.log('Obrigada por participar!')
  }

  module.exports = listarRecomendados