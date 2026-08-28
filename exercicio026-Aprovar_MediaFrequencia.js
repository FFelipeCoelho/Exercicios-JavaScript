const prompt = require("prompt-sync")();

let
	media=prompt("Media do aluno: "),
	frequencia=prompt("Frequencia do aluno: ")

if(media>=7 && frequencia>=75){
	console.log(`Aluno aprovado!`)
}else{
	console.log(`Aluno reprovado.`)
}