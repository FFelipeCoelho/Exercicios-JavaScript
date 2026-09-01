const prompt = require("prompt-sync")();

let
    valorCompra=prompt("Informe o valor de sua compra: ")
    pontos=Math.round(valorCompra/10)

if(valorCompra>=500){
    pontos+=50
}

console.log(`Total de pontos ganhos: ${pontos}`)
