const episodios = require('./database')

const convidadas = episodios.map((episodio)=> {
    return episodio.convidada
})

console.log(convidadas)