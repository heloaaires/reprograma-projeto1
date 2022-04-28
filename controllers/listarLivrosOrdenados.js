const livros = require('../database')
const read = require('readline-sync')

const listarLivrosOrdenados = () =>{
    const opcaoInicial = read.question('Deseja ordenar livros por quantidade de páginas? S/N ').toUpperCase()
    if(opcaoInicial === 'S'){
        const listarLivrosOrdenados = livros.sort((a,b) => a. paginas - b. paginas)
        console.table(listarLivrosOrdenados)

    } else {
        console.log('Obrigada por participar!')
    }
}

module.exports = listarLivrosOrdenados