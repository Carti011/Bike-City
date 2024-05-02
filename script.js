/* Funçao para trocar cor */
function trocar(cor){
    document.body.style.background=cor;
}

const header = document.querySelector("header");

window.addEventListener ("sroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY >0);
})