const prompt = require("prompt-sync")();

let
    tempoEmpresa=prompt("A quantos anos o funcionário está na empresa? "),
    salario=prompt("Quanto é pago mensalmente? "),
    desempenho=prompt("Qual o desempenho do funcionário? ")

if(tempoEmpresa>=5 && desempenho=="Otimo"){
    console.log(`Reajuste salarial de 15%, logo: ${salario*1.15}`)
}else if(tempoEmpresa>=2 && desempenho=="Bom"){
    console.log(`Reajuste salarial de 8%, logo: ${salario*1.08}`)
}else{
    console.log(`Reajuste salarial de 3%, logo: ${salario*1.03}`)
}