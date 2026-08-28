const prompt = require("prompt-sync")();

let
	nota=Number(prompt("Insira a nota: ")),
	classificacao

if(nota<=3){
	classificacao="insuficiente"
}else if(nota<=5){
	classificacao="regular"
}else if(nota<=7){
	classificacao="bom"
}else{
	classificacao="excelente"
}

console.log(`O estudante Juninho teve um desempenho ${classificacao}!`)