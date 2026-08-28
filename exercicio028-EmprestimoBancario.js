const prompt = require("prompt-sync")();

let
	idade=prompt("Informe sua idade: "),
	rendaMensal=prompt("Qual a sua renda mensal? ")

if(idade>=21 && rendaMensal>=2000){
	console.log(`Empréstimo aprovado.`)
}else{
	console.log(`Empréstimo negado.`)
}