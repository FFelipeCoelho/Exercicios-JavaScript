const prompt = require("prompt-sync")();

let
	usuario=prompt("Insira o nome de usuário: "),
	senha=prompt("Insira a senha: ")

if(usuario==="admin" && senha==="1234"){
	console.log(`Acesso liberado.`)
}else{
	console.log(`Usuário e/ou senha incorretos.`)
}