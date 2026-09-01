const prompt = require("prompt-sync")();

let celsius=prompt("Informe a temperatura em Celsius para conversão:")

console.log(celsius+"°C","em fahrenheit será:",(celsius*9/5+32))
