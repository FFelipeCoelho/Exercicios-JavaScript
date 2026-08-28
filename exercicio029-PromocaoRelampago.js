const prompt = require("prompt-sync")();

let
	valorCompra=prompt("Qual o valor de sua compra? "),
	clienteVip=prompt("Você possui o cartão VIP? ")

if(valorCompra>=300 || clienteVip=="sim" || clienteVip=="Sim"){
	console.log(`Frete grátis liberado!`)
}else{
	console.log(`Frete normal.`)
}