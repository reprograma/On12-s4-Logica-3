// Importa o array de objetos que fopi exportado da database.js
const estudantes   = require('./database')

//ordenando por idade de forma crescente
estudantes.sort((a,b)=> a.idade - b.idade)
//como pegar entradas de pessoas usuárias no terminal
//1- eu preciso importar a ferramenta readline-sync
const pegarEntrada = require('readline-sync')
//como fazer uma pergunta que vai ser respondida no terminal
const verAlunasPorLocal = pegarEntrada.question('Voce deseja encontrar uma aluna por local?(S/N)')
//verificando a partir da entrada, e mostrando os próximos passos do meu sistema
if(verAlunasPorLocal.toLocaleUpperCase() === 'S') { //entrada para maiuscula e perguntando se é igual a 'S'
    console.log('Essas sao as opcoes disponiveis:') // mostrar todos os locais disponiveis
    console.log('SP', 'PE')// realmente passei esses locais

    const qualLocal = pegarEntrada.question('Qual local voce escolhe?') //pegando a nova entrada

    const locais = estudantes.filter(estudante => estudante.local === qualLocal)//realmente realizando o filtro a partir do local digitado
    
    console.log(locais) //estou imprimindo as estudantes retornadas
} else {
    console.log('Essas sao todas as estudantes: ')
    console.log(estudantes)// mostra todas as estudantes
    // caso a pessoa escolha nao filtrar por localidade
}
