document.addEventListener("DOMContentLoaded", function () {
    // Inicializa o mapa com uma localização padrão
    let map = L.map('map').setView([-14.2350, -51.9253], 4); // Posição inicial: Brasil

    // Camada do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Marcador inicial
    let marker = L.marker([0, 0]).addTo(map).bindPopup('Sua localização').openPopup();

    // Monitora a localização do usuário em tempo real
    if ("geolocation" in navigator) {
        navigator.geolocation.watchPosition(
            function (position) {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                // Atualiza posição do mapa e marcador
                map.setView([lat, lon], 15);
                marker.setLatLng([lat, lon]);
            },
            function (error) {
                alert("Erro ao obter localização: " + error.message);
            },
            {
                enableHighAccuracy: true,
                maximumAge: 10000,
                timeout: 5000
            }
        );
    } else {
        alert("Geolocalização não suportada pelo seu navegador.");
    }
});

function redirecionar() {
    window.location.href = "../teladelogin/teladelogin.html"
}

function historico() {
    window.location.href = "../wireframe7/wireframe7.html"
}