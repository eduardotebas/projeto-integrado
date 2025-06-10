let card = document.querySelector(".card");
let loginButton = document.querySelector(".loginButton");
let cadastroButton = document.querySelector(".cadastroButton");

loginButton.onclick = () => {
    card.classList.remove("cadastroActive")
    card.classList.add("loginActive")
}

cadastroButton.onclick = () => {
    card.classList.remove("loginActive")
    card.classList.add("cadastroActive")
}

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    // Usuário e senha pré-definidos (apenas exemplo)
    if (usuario === "cooperativas@fortes.com.br" && senha === "123456") {
        alert("Login realizado com sucesso!");
        // Aqui poderia redirecionar para outra página, ex:
        window.location.href = "../wireframe9/wireframe9.html";
    } else if (usuario === "admin@fortes.com.br" && senha === "123456") {
        window.alert("Login realizado com sucesso!")
        window.location.href = "../wireframe1/wireframe1.html"
    } else {
        alert("Usuário ou senha inválidos!");
    }
});

