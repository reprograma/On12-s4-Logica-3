const episodios = require('./database')

// let numeros = [1,2,3,4]

// let soma = numeros.reduce((valorAnterior, valorAtual)=>{
//     return valorAnterior + valorAtual
// },5)

// console.log(soma)

const totalTempo = episodios.reduce((valorAnterior, valorAtual)=>{
    return valorAnterior + valorAtual.tempoEmMinutos
}, 45)

console.log(totalTempo)