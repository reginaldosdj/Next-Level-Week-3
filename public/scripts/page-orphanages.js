//criar mapa

const map = L.map('mapid').setView([-22.8666973,-43.264725], 14);

// criar e colocar uma camada
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// criar icone
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    IconAnchor: [29, 68],
    popupAnchor: [170,35]
})

function addMarker({id, name, lat, lng}) {

    //criar popup
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg">`)

L.
marker([lat,lng], { icon: icon })
.addTo(map)
.bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach( span => {

    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
     
    }
    addMarker(orphanage)
})

