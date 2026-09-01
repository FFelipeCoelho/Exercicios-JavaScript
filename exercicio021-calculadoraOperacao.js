const prompt = require("prompt-sync")();

let
	numero1=Number(prompt("Escolha o primeiro numero: ")),
	numero2=Number(prompt("Escolha o segundo numero: ")),
	operacao=prompt(`Escolha a operação desejada entre +(Somar) -(Subtrair), *(Multiplicar) e /(Dividir): `)

if(operacao=="+"||operacao==="Somar"||operacao==="SOMAR"){
	console.log(`${numero1}+${numero2} = ${(numero1+numero2)}`)
}else if(operacao=="-"||operacao==="Subtrair"||operacao==="SUBTRAIR"){
	console.log(`${numero1}-${numero2} = ${(numero1-numero2)}`)
}else if(operacao=="*"||operacao==="Multiplicar"||operacao==="MULTIPLICAR"){
	console.log(`${numero1}*${numero2} = ${(numero1*numero2)}`)
}else if(operacao=="/"||operacao==="Dividir"||operacao==="DIVIDIR"){
	console.log(`${numero1}/${numero2} = ${(numero1/numero2)}`)
}else{console.log("NaN")}
