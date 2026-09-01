const prompt = require("prompt-sync")();

let
	idade=prompt("Insira a idade do detento: ")

if(idade>=18){
	console.log(`O detento já atingiu maioridade penal!`)
};
