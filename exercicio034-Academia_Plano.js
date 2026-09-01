const prompt = require("prompt-sync")();

let
	frequencia=prompt("Quantos dias por semana deseja em seu plano de academia? ")

if(frequencia>=1 && frequencia<=2){
	console.log(`Plano basico.`)
}else if(frequencia>=3 && frequencia<=4){
	console.log(`Plano intermediario.`)
}else{
	console.log(`Plano premium.`)
}