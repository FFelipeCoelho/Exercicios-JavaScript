const prompt = require("prompt-sync")();

let
	number=prompt("Insira um número: ")

if(number>0){
	console.log(`${number} é maior que 0!`)
}else{
	console.log(`${number} não é maior que 0.`)
};
