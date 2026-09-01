const prompt = require("prompt-sync")();

let
	velocidade=Number(prompt("Insira a velocidade do veículo: ")),
	classif

if(velocidade<=40){
	classif="baixa"
}else if(velocidade<=80){
	classif="moderada"
}else if(velocidade<=120){
	classif="alta"
}else{
	classif="muito alta"
}

if(velocidade==0){
	console.log(`O veículo se encontra parado.`);
}else{
	console.log(`A velocidade atual do veículo é ${classif}!`)
}
