const prompt = require("prompt-sync")();

let
	idade=prompt("Insira sua idade: ")

if(idade>=18){
	console.log(`Com ${idade} anos você pode tirar sua CNH!`)
};