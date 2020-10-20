const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//criar mapa

const map = L.map('mapid', options).setView([-22.8666973,-43.264725],15);

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
//criar popup

L.
marker([-22.8666973,-43.264725], { icon: icon })
.addTo(map)

/*galeria de imagem*/

function selectImage(event){
    const button = event.currentTarget;

    //remover todas classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removerActiveClass);

    function removerActiveClass(button){
        button.classList.remove("active");
    }
    // selecionar imagem clicada
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");
    //atualizar o container de imagem

    imageContainer.src = image.src;

    //adicionar a classe .active para o botão clicado
        button.classList.add("active");
}
