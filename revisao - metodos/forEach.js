const episodios = require('./database')

episodios.forEach((episodio)=>{
    console.log(episodio.nome)
})