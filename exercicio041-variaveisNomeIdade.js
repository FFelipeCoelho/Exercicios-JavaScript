const prompt = require("prompt-sync")();

let
    nome=prompt("Digite seu nome: "),
    cidade=prompt("Digite sua idade: ")

console.log(`Você é ${nome} e mora em ${cidade}.`)
