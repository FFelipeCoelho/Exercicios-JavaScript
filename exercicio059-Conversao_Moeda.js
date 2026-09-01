const prompt = require("prompt-sync")();

let
    valorReais=Number(prompt("Insira o valor em reais que deseja converter: ")),
    cotacao=5,
    valorDolar=valorReais/cotacao

console.log(`Seus R$ ${valorReais} serão convertidos para ${valorDolar} dólares.`)