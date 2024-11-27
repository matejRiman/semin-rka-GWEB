// Inicializace mapy
var mapa = L.map('mapa').setView([-70.62472188820367, -29.103246462503115], 13); // [latitude, longitude], zoom level

// Přidání dlaždicového layeru (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 19
}).addTo(mapa);

// Data pro více bodů
var locations = [
    { name: "Hlavní město - Santiago de Chille", coords: [-70.65937105506048, -33.46179568838183] },
    { name: "Poušť Atacama", coords: [-69.13262875737095, -23.86383347718813] },
    { name: "Velikonoční ostrov", coords: [-109.35168002736042, -27.112858855445953] },
    { name: "El Tatio", coords: [-68.01296547509412, -22.33489979937848] }
];

// Přidání markerů na základě dat
locations.forEach(function(location) {
    var marker = L.marker(location.coords).addTo(mapa);
    marker.bindPopup(`<b>${location.name}</b>`); // Popup s názvem bodu
});
