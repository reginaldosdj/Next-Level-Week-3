const map = L.map('mapid', options).setView([-22.8666973,-43.264725],15);

// criar e colocar uma camada
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// criar icone
const icon = L.icon({
    iconUrl: "public/images/map-marker.svg",
    iconSize: [58, 68],
    IconAnchor: [29, 68],
    popupAnchor: [170,35]
})
//criar popup
