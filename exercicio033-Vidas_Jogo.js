const prompt = require("prompt-sync")();

let
	vida=prompt("Quantas vidas restantes seu personagem possui? ")

if(vida>=3){
	console.log(`Tudo certo!`)
}else if(vida>=1 && vida<=2){
	console.log(`Cuidado!`)
}else{
	console.log(`Game Over.`)
}