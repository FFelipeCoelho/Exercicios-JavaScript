const prompt = require("prompt-sync")();

let nome=prompt("Informe o produto: "), preco=prompt("Insira o preço: "),quantidade=prompt("Quanto desse produto se deseja comprar? ");

console.log(quantidade+"x"+nome,"-","Total: R$"+(preco*quantidade));