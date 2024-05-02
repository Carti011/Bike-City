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

/* Alerta com Mensagem 
alert("Seja Bem Vindo") */