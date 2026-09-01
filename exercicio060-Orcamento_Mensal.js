const prompt = require("prompt-sync")();

let
    salario=2500,
    aluguel=900,
    internet=100,
    alimentacao=600,
    transporte=300,
    totalGasto=aluguel+internet+alimentacao+transporte

console.log(`No fim do mês após gastar R$ ${totalGasto} sobram R$ ${salario-totalGasto}`)