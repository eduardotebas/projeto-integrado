function enviar() {
    const bairro = document.getElementById("bairro").value;
    const tipo = document.getElementById("tipo").value;
    const materiais = document.getElementById("materiais").value;
    const mensagem = document.getElementById("mensagem");

    if (bairro && tipo && materiais) {
        mensagem.textContent = "Sugestão enviada com sucesso!";
        mensagem.style.color = "black"
    } else {
        mensagem.textContent = "Por favor, preencha todos os campos.";
        mensagem.style.color = "black";
    }

    mensagem.style.display = "block";

    // Oculta após 3 segundos
    setTimeout(() => {
        mensagem.style.display = "none";
    }, 3000);

}

function redirecionar() {
    window.location.href = "../teladelogin/teladelogin.html"
}

function voltar() {
    window.location.href = "../wireframe1/wireframe1.html"
}