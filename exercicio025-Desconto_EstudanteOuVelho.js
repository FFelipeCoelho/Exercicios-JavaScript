const prompt = require("prompt-sync")();

let
	tipo=prompt("Você é um estudante? "),
	idade=Number(prompt("Digite sua idade: "));

if(tipo=="sim"||tipo=="Sim"||idade>=60){
	console.log("Desconto aprovado!");
}else{
	console.log("Sai daqui vagabundo.");
};