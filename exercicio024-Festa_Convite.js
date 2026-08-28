const prompt = require("prompt-sync")();

let
	convite=prompt("Você possui um convite? "),
	idade=Number(prompt("Insira sua idade: "))

if(idade>=18 && (convite=="sim" || convite=="yes" || convite=="Sim" || convite=="Yes" || convite=="SIM" || convite=="YES")){
	console.log(`Entrada permitida.`)
}else{
	console.log(`Entrada negada.`)
}