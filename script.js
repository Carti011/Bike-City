/* Funçao para trocar cor */
function trocar(cor){
    document.body.style.background=cor;
}

const header = document.querySelector("header");

window.addEventListener ("sroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY >0);
})


/* Comando dos slide show */

let slideIndex = 0;
showSlides();

function showSlides() {
let slides = document.getElementsByClassName("slide");
for (let i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}
slides[slideIndex-1].style.display = "block";
setTimeout(showSlides, 2000); // Altere o valor para ajustar a velocidade do slideshow (em milissegundos)
}


alert("Seja Bem - Vindo")
















// Parte do Script do Login

const form = document.querySelector("#form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    //Verificar se o email está preenchido 
    if(emailInput.value === ""){
        alert("Email vazio. Por favor preencha o seu email.");
        return;
    }

    //Verificar se a senha está preenchida
    if(passwordInput.value === ""){
        alert("Senha vazia. Por favor coloque sua senha.");
        return;
    }


    //Com todos os campos preenchidos, enviar form
    form.submit();
    location.href = "quiz.html"
    

});














// TUDO SOBRE O QUIZ  
//declarando variaveis

let p1=prompt("Digite seu nome");
let p2=prompt("Digite seu poder");
let p3=prompt("Digite o nome de um vilao");
let p4=prompt("Digite um lugar");
let msg= document.getElementById("msg");

msg.innerHTML = `Ola ${p1}, o seu poder e ${p2} e voce vai enfrentar o ${p3} no/em ${p4}`