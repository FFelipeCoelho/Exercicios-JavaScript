const prompt = require("prompt-sync")();

let
	nota1=Number(prompt("Insira a primeira nota: ")),
	nota2=Number(prompt("Insira a segunda nota: "))

if((nota1+nota2)/2>=7){
	console.log(`O aluno foi aprovado com a média ${(nota1+nota2)/2}.`)
}else{
	console.log(`O aluno foi reprovado por conta de sua média ser ${(nota1+nota2)/2}.`)
}
