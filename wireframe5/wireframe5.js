function redirecionar() {
    window.location.href = "../teladelogin/teladelogin.html"
}

function voltar() {
    window.location.href = "../wireframe1/wireframe1.html"
}

function registrar() {
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("registrar").addEventListener("click", function (event) {
            event.preventDefault();

            const localizacao = document.getElementById("localizacao").value.trim();
            const quantidade = document.getElementById("quantidade").value.trim();

            const materiaisSelecionados = [];
            document.querySelectorAll('input[name="material"]:checked').forEach(function (checkbox) {
                materiaisSelecionados.push(checkbox.value);
            });

            if (localizacao === "" || quantidade === "" || materiaisSelecionados.length === 0) {
                alert("Por favor, preencha todos os campos e selecione pelo menos um tipo de material.");
                return;
            }

            console.log("Localização:", localizacao);
            console.log("Quantidade:", quantidade);
            console.log("Materiais:", materiaisSelecionados.join(", "));

            alert("Coleta registrada com sucesso!");

            document.getElementById("localizacao").value = "";
            document.getElementById("quantidade").value = "";
            document.querySelectorAll('input[name="material"]').forEach(function (checkbox) {
                checkbox.checked = false;
            });
        });
    })
}
