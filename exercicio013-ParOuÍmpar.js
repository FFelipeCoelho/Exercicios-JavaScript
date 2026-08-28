const prompt = require("prompt-sync")();

let
	number=prompt("Insira um número: ")

if(number%2<=0){
	console.log(`${number} é par.`)
}else{
	console.log(`${number} é ímpar.`)
};