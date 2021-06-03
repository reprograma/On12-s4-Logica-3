// encontre o episodio que tem exatamente o nome "Prazer, backend"

const episodios = require('./database')

const episodioBack = episodios.find((episodio) =>{
    return episodio.nome == "Prazer, backend"
})

console.log(episodioBack)