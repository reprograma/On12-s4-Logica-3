
//let notasDobradas 

// let dobrar = (a) => a*2

// function dobrar(a) {
//     return a*2
// }
   
// console.log(notas.map(dobrar))

//arrow function
//metodo de iteracao nativo do js map
//função callback

//Deverá retornar um novo array com todos itens do antigo array dobrado(multiplicar por 2)

let notas = [8, 9, 1, 7, 8, 9, 1, 7 ,8 , 9, 1, 7]
//passado 
// function dobrar(nota) {
//     return nota * 2
// }
// let notasDobradas = notas.map(dobrar)

//presente
// let notasDobradas = notas.map(function dobrar(numero) {
//     return numero * 2
// })
// console.log(notasDobradas)

//futuro
let futuroDoZero = notas.map((nota,index) => {
        return[nota * 2, index * 2]
    })
console.log(futuroDoZero)



//como nao fazer 
// let numero1Dobrado = notas[0] * 2 //16
// console.log(numero1Dobrado)

// let numero2Dobrado = notas[1] * 2 //18
// console.log(numero2Dobrado)

// let numero3Dobrado = notas[2] * 2 //2
// console.log(numero3Dobrado)

// let numero4Dobrado = notas[3] * 2 //14
// console.log(numero4Dobrado)


