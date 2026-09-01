const prompt = require("prompt-sync")();

let
	conta=prompt("Insira a conta: "),
	nota=prompt("de 0 a 10 qual nota daria para o estabelecimento? ")

if(nota>=8){
	console.log(`Gostaria de oferecer ${conta*0.15} de gorjeta pelo servico?`)
}else if(nota>=5){
	console.log(`Gostaria de oferecer ${conta*0.1} de gorjeta pelo servico?`)
}else{
	console.log(`Você pode oferecer uma gorjeta se desejar.`)
}