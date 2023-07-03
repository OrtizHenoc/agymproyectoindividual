var map2 = L.map('map2').setView([12.13282, -86.2504], 15 );

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map2);

const center = map2.getCenter();
const lat = center.lat;
const lng = center.lng;

const marker = L.marker([lat, lng], { draggable: true }).addTo(map2);

