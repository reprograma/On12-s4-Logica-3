const alunas = ['Luna', 'Caroline', 'Mari', 'larissas', 'Kelly']

// console.log(alunas[2])//'Mari'

const estudantes = [
    {
        nome: 'Luna',
        idade: 28,
        local: 'SP'
    },
    {
        nome: 'Caroline',
        idade: 39,
        local: 'PE'
    },
    {
        nome: 'Mari',
        idade: 31,
        local: 'PE'
    }

]

// console.log(estudantes[2]) // o objeto inteiro

//mapeando todos os índices dentro do meu array de estudantes
for (let nome = 0; nome < estudantes.length; nome++) {
    console.log(estudantes[nome].local)
}

//incluindo um novo objeto no array estudantes 
estudantes[3] = {
    nome: 'Ana Cláudia',
    idade: 32,
    local: 'SP'   
}

console.log(estudantes)