



// TUDO SOBRE O QUIZ  
//declarando variaveis

let p1=prompt("Digite seu nome");
let p2=prompt("Digite seu poder");
let p3=prompt("Digite o nome de um vilao");
let p4=prompt("Digite um lugar");
let msg= document.getElementById("msg");

msg.innerHTML = `Ola ${p1}, o seu poder e ${p2} e voce vai enfrentar o ${p3} no/em ${p4}`
