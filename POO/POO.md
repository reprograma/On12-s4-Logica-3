```
## POO com Javascript Introdução

### class x function 

*O que é a programação orientada a objetos? 

*É um paradigma de desenvolvimento, uma forma de construir e analisar a nossa lógica,além disso é utilizado muito na maioria dos sistemas atuais* 

*Tudo o que fazemos na POO é trabalhar com objetos.Ela foi criada para tentarmos representar objetos do mundo real nos códigos, com estados e comportamentos.*

*Os 4 pilares da programação orientada a objeto:*

*herança: podemos extender propriedades e metodos de uma classe mae para uma classe filha.Isso serve para replicar as caracteristicas de um objeto para outro. Isso nos ajuda a escrever códigos sem repetir tanto as mesmas linhas de código.*

*encapsulamento: conceito simples e poderoso, pois guarda a lógica da nossa classe, deixando nossos atributos de forma privada e só podemos acessar utilizando os metodos de get e set.*

*polimorfismo: a capacidade de objetos compativeis, se passar por outro em certas ocaciões. Podemos dessa forma herdar metodos, e reescrever todos os comportamentos. "Podemos brincar a vontade com o DNA do nosso sistema".*

*abstração: não é um conceito concreto, chega ser redundante. O super poder é criarmos a classe mãe o mais abstrata possível, ela recebe o nome de template, identidade ou superclasse. Não pode ser criado um onjeto diretamente dessa classe, mas sim das classes filhas que herdam as caracteristicas e comportamentos da classe mae.*

*Se você começou agora, vai perceber com o tempo a importancia desses 4 pilares, pois eles são as bases de técnicas e ferramentas que nos ajudam desde a concepção do projeto até codificação dele. Uma dessas técnicas é o design patterns que nos ajudar a manter um padrão de qualidade em nossos códigos. Além disso, muitas linguagens utilizam esse paradigma: java, python, .Net, Javascript e muitas outras.*

* Como entender classes no JS.

*Classes são como formas/moldes que definem os métodos e as propriedades para instanciarmos um objeto. Dentro dela não definimos nenhum dado ou informação é apenas a forma de como nosso objeto irá se parecer. Já objetos são as versões instanciadas dessas classes, essencialmente uma versão especifica dessa classe com os valores para as propriedades. Por exemplo se criarmos uma class Parede que recebe a propriedade cor, ela não diz qual cor será pintada essa parede, apenas diz que quando for criado um objeto nova parede ela irá receber um valor para cor.*

* E a palavra reservada this?

*Antes de 2015 as classes eram escritas como funções, após o es6 usamos a sintaxe class e a palavra reservada this é usada para internamente da classe associarmos um valor.*


* Qual a função do constructor nas classes?

*As classes em JavaScript têm um método constructor que permite definir campos quando o objeto é instanciado com uma class, ou seja, é esse método que faz a contrução do objeto quando a gente cria uma intância dessa classe usando a palavra reservada new. Cada classe pode ter apenas um constructor. Se houver mais de um, SyntaxError será lançado. O constructor também pode chamar o método super para chamar o constructor de outra classe se a classe estender uma classe mãe. Configurando assim a herança na POO.*

* Quais seriam as situações que seria mais lógico usar classe ao invés de uma função?

*O mais importante a lembrar: as classes são apenas funções JavaScript normais e antes eram declaradas sem o uso da class sintaxe. Que somente foi adicionado ao ES6(2015) para tornar mais fácil declarar e herdar objetos complexos.*

*A principal diferença entre a sintaxe class e function é que function sofre hoisting, enquanto class não. Isso significa que um objeto nunca pode ser instanciado executando uma classe que foi declarada posteriormente. Enquanto é possível executar uma funçao antes e declarar depois. Pois o interpretador do javascript eleva a função para o topo da página.*

*Agora para decidir quando usar class ou function, é muito importante lembrar dos conceitos da programação orientada a objeto. Por exemplo quando nós encapsulamos a lógica em uma class, o código fica muito mais limpo e de fácil entendimento em vez de criarmos várias funções.*

*Geralmente usamos classes para construir diferentes objetos com as mesmas propriedades. Exemplo conta bancária. Usamos também em algumas bibliotecas e supersets (class components no React e typescript nos types e interfaces)*

```
function Person(name) {
    this._name = name;
}

var person = new Person('Simara');

console.log(person)

```

```
class House {
    constructor(color) {
        this.color =  color;
    }

    getFurniture() {
        return 'sofa';
    }
}

const houseObject = new House('red');
const houseObject2 = new House('pink');

console.log(houseObject);
console.log(houseObject.getFurniture());

console.log(houseObject2);
console.log(houseObject2.getFurniture());
```
``` 
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

calculadora();

const calculator = new Calculator(5, 6);

console.log(calculator.sum());
console.log(calculator.sub());
console.log(calculator.mult());
console.log(calculator.div());


function calculadora(num1, num2) {
    return num1 + num2
}

console.log(calculadora(1,2))

```
