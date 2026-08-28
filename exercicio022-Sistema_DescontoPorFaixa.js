const prompt = require("prompt-sync")();

let
	valor=Number(prompt("Insira o valor da compra: "))

if(valor>=500){
	console.log(`Desconto de 20%, o valor final de sua compra será: ${(valor*0.8)}`)
}else if(valor>=200){
	console.log(`Desconto de 10%, o valor final de sua compra será: ${(valor*0.9)}`)
}else if(valor>=100){
	console.log(`Desconto de 5%, o valor final de sua compra será: ${(valor*0.95)}`)
}else{
	console.log(`Não há desconto, o valor final de sua compra será: ${valor}`)
}