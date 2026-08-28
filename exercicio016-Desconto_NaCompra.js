const prompt = require("prompt-sync")();

let
	valorCompra=prompt("Informe o valor de sua compra: ")

if(valorCompra>=100){
	console.log(`Uma compra de ${valorCompra}R$ resulta em desconto de 10%
O valor final será: ${valorCompra*0.9}R$`)
}else{
	console.log(`Sua compra de ${valorCompra}R$ não é elegível a desconto.`)
}