const prompt = require("prompt-sync")();

let
	valor=prompt("Insira o valor da compra: "),
	cupom=prompt("Você possui um cupom? ")

console.log(`O valor de sua compra é de R$ ${valor}`)

if(valor>=150 && (cupom=="sim" || cupom=="Sim")){
	console.log(`Com desconto o valor ficas: R$ ${valor*0.85}`)
}
