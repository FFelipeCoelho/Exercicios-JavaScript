const prompt = require("prompt-sync")();

let
	temperatura=prompt("Informe a temperatura atual: ")

if(temperatura>=28){
	console.log(`É um dia quente, sugere-se ir à praia tomar um sol!`)
}else{
	console.log(`Não está um dia muito quente, sugere-se uma caminhada nas montanhas.`)
}