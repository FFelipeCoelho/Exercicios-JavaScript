const prompt = require("prompt-sync")();

let hora=prompt("Quantas horas você esteve estacionado? ")

if(hora<=1){
	console.log(`Você passou ${hora} hora estacionado
Total a pagar de: R$ 5`)
}else if(hora>=2 && hora<=4){
	console.log(`Você passou ${hora} horas estacionado
Total a pagar de: R$ ${hora*4}`)
}else{
	console.log(`Você passou ${hora} horas estacionado
Total a pagar de: R$ ${hora*3}`)
}
