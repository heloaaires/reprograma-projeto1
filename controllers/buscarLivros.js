const livros = require('../database')
const read = require('readline-sync')

const buscarLivros = () => {
  //quando o 1 é chamado la no app, entra aqui nesse codigo
  //e faz essa pergunta no terminal
  const opcaoInicial = read.question('Deseja buscar por categoria? S/N ').toUpperCase()

  //quando a pessoa responde S
  //entra aqui no if
  if (opcaoInicial === 'S') {
    //mostra no console todas as categorias existentes
    const categorias = livros.map(livro => livro.categoria)
    
    let naoRepetidos = categorias.filter((este, i) => categorias.indexOf(este) === i)
    console.table(naoRepetidos)

    const inputCategoria = read.question('Digite uma categoria conforme tabela acima: ')

    const confirmacao = read.question('Tem certeza? S/N').toUpperCase()

    if (confirmacao === 'S') {
      const livrosFiltrados = livros.filter(livro => livro.categoria === inputCategoria)
      console.table(livrosFiltrados)

    } else
      console.log('Obrigada por participar!')
  } else
  console.log('Obrigada por participar!')
}

module.exports = buscarLivros