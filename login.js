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