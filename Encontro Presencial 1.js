// ATIVIDADE PRESENCIAL - CODIFICAÇÃO PARA UM SISTEMA DE PEÇAS

// Sistema para verificar o peso da peça

var pesoPeça = 100

if(pesoPeça >= 100){
    console.log("A peça pesa " + pesoPeça + " gramas")
    console.log("Cadastrar")
}else {
    console.log("Peso menor que 100 gramas")
    console.log("Impossibilidade de Cadastro")
}

console.log ("FIM")

// Sistema para verificar a quantidade de peças

var quantidadePeças = 9

if (quantidadePeças >= 10){
    console.log("capacidade insuficiente")
}else {
    console.log("Capacidade suficiente")
}

console.log("FIM")

// Sistema para verificar o nome da peça

var nomePeça = ["Abraçadeira"]

for (let index = 0; index < nomePeça.length; index++){
    console.log(index + 1 + ". " + nomePeça[index])
}if(nomePeça.length < 3){
    console.log("Erro!")
    console.log("Quantidade de caracteres é inferior a 3")
}else{
    console.log("Quantidade superior a 3 caracteres")
    console.log("Cadastrar")
}

console.log("FIM")