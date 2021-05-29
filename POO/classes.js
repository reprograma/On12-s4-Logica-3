//passado
function Person(name, idade) {
    this._name = name;
    this._idade = idade;
}

var person = new Person('Simara');

console.log(person)

//
class House {
    constructor(color) {
        this.color =  color;
    }

    pegaMobilia() {
        return 'sofa';
    }
}

const houseObject = new House('red');// 
casa = {
    color: 'red'
}
const houseObject2 = new House('pink');
const houseObject3 = new House('azul');
const houseObject4 = new House('verde');


console.log(houseObject);
console.log(houseObject.pegaMobilia());

console.log(houseObject2);
console.log(houseObject2.getFurniture());

class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    sum() {
        return this.num1 + this.num2;
    }

    sub() {
        return this.num1 - this.num2;
    }

    mult() {
        return this.num1 * this.num2;
    }

    div() {
        return this.num1 / this.num2;
    }
}


const calculator = new Calculator(5, 6);

console.log(calculator.sum());
console.log(calculator.sub());
console.log(calculator.mult());
console.log(calculator.div());


function calculadora(num1, num2) {
    return num1 + num2
}


console.log(calculadora(1,2))