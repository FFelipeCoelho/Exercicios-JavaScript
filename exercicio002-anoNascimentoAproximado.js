const prompt = require("prompt-sync")();

const ano=Number(prompt("Insira o ano de seu nascimento: "));

console.log("Como você nasceu em",ano,"sua idade é",(2026-ano),"anos.");
