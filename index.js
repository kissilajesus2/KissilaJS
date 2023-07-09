const ano_atual=2023
//recolher o nome e ano de nascimento do usuario

const nome = prompt ("digite seu nome")
const ano_nascimento = parseInt(prompt( "Digite seu ano de nascimento"))

alert (nome) 
alert (ano_nascimento)

let idade = ano_atual - ano_nascimento

alert ("Ola" +nome+", você tem "+ idade + " anos.")


