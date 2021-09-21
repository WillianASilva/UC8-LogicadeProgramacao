// Codificação de um sistema de cadastro de eventos

var palestrantes = 5
var participantes = 60

if(participantes + palestrantes < 100){
    console.log("O total de palestrantes e participantes é " + (participantes + palestrantes));
    console.log("Sendo: " + palestrantes + " palestrantes"+ " e " + participantes + " participantes")

    dataAtual = "15/10"
    
    if(dataAtual <= "15/10"){
        console.log("Data válida");
        console.log("Por favor, informe sua idade");

        var idade = 17

        if (idade >= 18){
            console.log("Idade válida");
            console.log("Aguarde enquanto validamos seu cadastro");
            console.log("cadastro efetuado")

        }else {
            console.log("Idade não permitida");
            console.log("Por favor, informe uma idade válida");
        }
    }else{
        console.log("Sinto muito, a data para inscrição do evento expirou");
    }
}else{
    console.log("Quantidade excedida");
    console.log("Sinto muito, a quantidade de participantes excedeu o limite de 100 pessoas");
}