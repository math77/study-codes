// i possui escopo de bloco porque fui utilizado a "let" forma de declarar
for (let i = 0; i < 7; i++) {
	console.log(i);
}

/*

* Utilizar o "const" para declarar as váriaveis e o "let" para quandos elas podem receber
  um novo valor.

* Usar o "var" praticamente nunca. 

*/

// Nova forma para declarar valores default para parâmetros.
const multiply = (x, y = 2) => {
	return x * y;
}

console.log(multiply(3, 3));
console.log(multiply(2));

/*
	...numbers é um array com os param passados na função.
	É utilizado em funções que não se sabe ao certo o número de 
	argumnetos que vão ser recebidos.

	Os métodos de Array se aplicam a ele.
*/

function sum(...numbers){
	let result = 0;

	numbers.forEach((number) => {
		result += number;
	});

	return result;
}

console.log(sum(1, 2, 3, 4, 5, 6));

/*
    Arrow functions são uma syntax sugar forma de declarar funções.
    Em funções que possuem apenas uma linha podemos omitir o return e as chaves.
*/

const sum2 = (x, y) => {
	return x+y;
}

const sum3 = (x, y) => x+y;

console.log(sum2(1, 1));
console.log(sum3(1, 2));


/* 
	CLASSES
	
	O underscore antes da propriedade representa que ela deve ser mantida privada.
*/

class Animal {
	constructor(name){
		this._name = name;
	}

	get name(){
		return this._name;
	}

	set name(name){
		this._name = name;
	}
}

const animal = new Animal("Doguinho");
console.log(animal.name);

/* 
	A palavra reservada "export" transforma a função/classe em um módulo
	que pode ser usado em outros arquivos.

	Para importar a função: 
		import { show } from 'arquivo';

	Para importar uma classe:
		import { Classe } from 'arquivo';

*/

export function show(name){
	return `Sou o ${name}`;
}