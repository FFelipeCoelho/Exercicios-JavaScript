const prompt = require("prompt-sync")();

let
    jogador1=prompt("Jogador 1, insira sua jogada (pedra, papel ou tesoura):"),
    jogador2=prompt("Jogador 2, insira sua jogada (pedra, papel ou tesoura):")

if(jogador1===jogador2){
    console.log(`Empate!`)
}else if((jogador1=="pedra" && jogador2=="tesoura") ||
        (jogador1=="tesoura" && jogador2=="papel") ||
        (jogador1=="papel" && jogador2=="pedra")){
    console.log(`Vitória do jogador 1!`)
}else{
    console.log(`Vitória do jogador 2!`)
}
