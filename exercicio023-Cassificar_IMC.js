const prompt = require("prompt-sync")();

let
	altura=prompt("Informe sua altura: "),
	peso=prompt("Informe seu peso: ")

if(peso/(altura*altura)<18.5){
	console.log(`Seu IMC é ${peso/(altura*altura)}, abaixo do peso.`)
}else if(peso/(altura*altura)<25){
	console.log(`Seu IMC é ${peso/(altura*altura)}, peso normal.`)
}else if(peso/(altura*altura)<30){
	console.log(`Seu IMC é ${peso/(altura*altura)}, sobrepeso.`)	
}else{
	console.log(`Seu IMC é ${peso/(altura*altura)}, obesidade.`)
}