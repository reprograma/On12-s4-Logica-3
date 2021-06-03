const episodios = require('./database')

//filtrar episodios da categoria hard skills 
const categoriaHard = episodios.filter((item)=>{
    return item.categoria == "hard skills"
})

console.log(categoriaHard)

//filtrar episodios da categoria soft skills 
const categoriaSoft = episodios.filter((item)=>{
    return item.categoria == "soft skills"
})

console.log(categoriaSoft)