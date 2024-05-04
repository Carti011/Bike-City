document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Obter os valores dos campos do formulário
    let nome = document.getElementById("nome").value;
    let tipoTerreno = document.getElementById("terreno").value;
    let distânciaPretendida = document.getElementById("distancia").value;
    let experiênciaCiclismo = document.getElementById("experiencia").value;
    let orçamento = document.getElementById("orcamento").value;
    let preferênciaMarchas = document.getElementById("marchas").value;
    let tamanhoQuadro = document.getElementById("altura").value;
    let preferênciaMarca = document.getElementById("marca").value;
    let estiloPedalada = document.getElementById("estilo").value;
    let corPreferida = document.getElementById("cor").value;

    // Esconder o formulário
    document.getElementById("quiz-form").style.display = "none";

    // Exibir as mensagens na página
    let msg = document.getElementById("msg");
    msg.innerHTML = `<p>Olá ${nome}, obrigado por responder ao nosso quiz!</p>`;
    msg.innerHTML += `<p>Com base nas suas respostas, recomendamos uma bicicleta para ${tipoTerreno}.</p>`;
    msg.innerHTML += `<p>Com uma distância média de ${distânciaPretendida} por passeio.</p>`; 
    msg.innerHTML += `<p>Como você é um ciclista ${experiênciaCiclismo}, sugerimos uma bicicleta de ${preferênciaMarchas}.</p>`;
    msg.innerHTML += `<p>Com o quadro para uma pessoa de ${tamanhoQuadro}</p>`;
    msg.innerHTML += `<p>E que se encaixe dentro do seu orçamento de ${orçamento}.</p>`;
    msg.innerHTML += `<p>Sua preferência de marca é ${preferênciaMarca}, e sua cor preferida é ${corPreferida}.</p>`;
    msg.innerHTML += `<p>Esperamos que você encontre a bicicleta perfeita para suas necessidades!</p>`;

    // Adicionar tabela com respostas (como exemplo)
    let tabelaRespostas = document.createElement("table");
    tabelaRespostas.id = "tabela-respostas";
    // Aqui você pode adicionar as linhas e colunas da tabela com as respostas do quiz
    msg.appendChild(tabelaRespostas);

    // Adicionar botão para editar respostas
    let editarBtn = document.createElement("button");
    editarBtn.innerText = "Editar Respostas";
    editarBtn.classList.add("botao");
    editarBtn.addEventListener("click", function() {
        // Mostrar o formulário novamente
        document.getElementById("quiz-form").style.display = "block";
        // Esconder a mensagem
        msg.innerHTML = "";
    });
    msg.appendChild(editarBtn);

    // Adicionar botão para ir para index.html na seção trending
    let recomendacoesBtn = document.createElement("button");
    recomendacoesBtn.innerText = "Nossas Recomendações";
    recomendacoesBtn.classList.add("botao");
    recomendacoesBtn.style.marginLeft = "10px"; // Adicionando margem à esquerda
    recomendacoesBtn.addEventListener("click", function() {
        // Redirecionar para index.html na seção trending
        window.location.href = "index.html#trending";
    });
    msg.appendChild(recomendacoesBtn);
});
