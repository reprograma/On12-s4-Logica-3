const aluna = {
    nome: 'Larisse', //atributos
    local: 'Piauí',
    idade: 29,
    preferenciaFilme: ['comédia', 'drama'],
    estuda: function () { //metodos
        for (let i = 1; i <= 10; i++) {
            console.log('estuda javascritpt e tá arrasando' + i)
        }
    }
}

delete aluna.nome
console.log(aluna)

// aluna.nome = 'Aline'
// console.log(aluna.nome)// Aline
// console.log(aluna.idade)//29
// console.log(aluna.preferenciaFilme[0])//comédia
// console.log(aluna.estuda())// estuda javascritpt e tá arrasando
// console.log('--------')

