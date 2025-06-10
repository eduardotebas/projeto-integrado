function redirecionar() {
    window.location.href = "../teladelogin/teladelogin.html"
}

function direcionar() {
    window.location.href = "../wireframe3-4/wireframe3-4.html"
}


function coletar() {
document.getElementById("coletar-btn").addEventListener("click", function (e) {
    e.preventDefault();

    const materiais = document.querySelectorAll(".material");
    const enderecoMsg = document.getElementById("mensagem-endereco");

    materiais.forEach((material) => {
        const icon = material.querySelector(".material-icon");

        // Evita esconder novamente ou duplicar mensagens
        if (icon && icon.style.display !== "none") {
            icon.style.display = "none";

            const coletadoMsg = document.createElement("p");
            coletadoMsg.textContent = "Itens coletados";
            coletadoMsg.style.color = "green";
            coletadoMsg.style.fontWeight = "bold";
            material.appendChild(coletadoMsg);
        }
    });

    // Adiciona a mensagem de endereço apenas se ainda não estiver presente
    if (!enderecoMsg.hasChildNodes()) {
        const endereco = document.createElement("p");
        endereco.textContent = "Itens reservados no ponto de coleta: RUA ABC, 123";
        endereco.style.marginTop = "10px";
        endereco.style.fontWeight = "bold";
        endereco.style.color = "#333";
        enderecoMsg.appendChild(endereco);
    }
});


}
function formulario() {
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Verifica se a mensagem já foi exibida
    if (!document.getElementById("mensagem-confirmacao")) {
      const mensagem = document.createElement("p");
      mensagem.id = "mensagem-confirmacao";
      mensagem.textContent = "Itens pedidos, notificaremos ao receber esses itens nos pontos.";
      mensagem.style.color = "green";
      mensagem.style.fontWeight = "bold";
      mensagem.style.marginTop = "20px";

      this.appendChild(mensagem); 
    }
  })
};