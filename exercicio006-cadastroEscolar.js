const prompt = require("prompt-sync")();

let
	matricula=prompt("Informe o número da matrícula: "),
	nome=prompt("Informe o nome do aluno: "),
	turma=prompt("Qual será sua turma? ")

console.log(`Aluno ${nome} (matrícula ${matricula}) cadastrado com sucesso na turma ${turma}`);
