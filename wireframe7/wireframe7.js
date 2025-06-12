function redirecionar() {
    window.location.href = "../teladelogin/teladelogin.html"
}

document.addEventListener("DOMContentLoaded", function () {
    const map = L.map('map').setView([-20.3155, -40.3128], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const heat = L.heatLayer([
        [-20.3155, -40.3128, 0.9], // Centro
        [-20.2952, -40.3075, 0.7], // Praia do Canto
        [-20.2969, -40.3200, 0.8], // Bento Ferreira
        [-20.3292, -40.2971, 0.6], // Jardim Camburi
        [-20.3000, -40.2900, 0.5], // Ilha do Príncipe
        [-20.3275, -40.3388, 0.4], // Mata da Praia
        [-20.3222, -40.3491, 0.3]  // Goiabeiras
    ], {
        radius: 25,
        blur: 15,
        maxZoom: 17,
    }).addTo(map)
});