const prompt = require("prompt-sync")();

let
	idade=prompt("Informe a idade do individuo: "), classificacao

if(idade<2){
	classificacao = "bebe"
}
else if(idade<12){
	classificacao = "crianca"
}
else if(idade<18){
	classificacao = "adolecente"
}
else if(idade<60){
	classificacao = "adulto"
}
else{
	classificacao = "idoso"
}

console.log(`Sua classificação é: ${classificacao}`)
