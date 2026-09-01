const prompt = require("prompt-sync")();

let
	senhaDigitada=prompt("Insira a senha: ")

if(senhaDigitada==1234){
	console.log(`Senha correta.`)
}else{
	console.log(`Senha incorreta.`)
}
