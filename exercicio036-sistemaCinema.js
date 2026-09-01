const prompt = require("prompt-sync")();

let
	nome=prompt("Insira seu nome: "),
	idade=prompt("Insira sua idade: "),
	ingresso=prompt("Você possui ingresso? ")

if(idade>=14 && (ingresso=="sim" || ingresso=="Sim")){
	console.log(`Entrada liberada, tenha um bom filme ${nome}.`)
}else{
	console.log(`Entrada recusada.`)
	if(idade<14){
		console.log(` -Idade insuficiente`)
	}	
	if(ingresso!="sim" || ingresso!="Sim"){
		console.log(` -Ausencia de ingresso`)
	}
}
