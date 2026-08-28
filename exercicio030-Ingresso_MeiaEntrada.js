const prompt = require("prompt-sync")();

let
	idade=prompt("Informe a sua idade: ")

if(idade<=12 || idade>=60){
	console.log(`Meia entrada, o ingresso custa: R$15,00`)
}else{
	console.log(`O ingresso custa: R$30,00`)
}