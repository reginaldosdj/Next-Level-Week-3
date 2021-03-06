//criar mapa
const map = L.map('mapid').setView([-22.8666973, -43.264725], 14);

// criar e colocar uma camada
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// criar icone
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    IconAnchor: [29, 68],
})

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remover icone 
    marker && map.removeLayer(marker)

    // add icone ao marker
    marker = L.marker([lat, lng], { icon })
        .addTo(map);
})

//adicionar campo de fotos

function addPhotoField() {
    // pegar o container de fotos #images
    const container = document.querySelector('#images');
    // pegar o container para duplicar .nem-upload
    const fieldsContainer = document.querySelectorAll('.new-upload');
    // realizar o clone da última imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);
    //verificar se o campo está vazio, se sim não clonar.

    const input = newFieldContainer.children[0];

    if (input.value == "") {
        alert("por favor inclua uma foto na opção anterior");
        return
    }
    //limpar campo antes de clonar
    input.value = "";
    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer);
}

function deletefield(event) {

    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload');

    if (fieldsContainer.length <= 1) {
        //limpar o valor do campo
        span.parentNode.children[0].value = '';
        return
    }
    //deletar o campo
    span.parentNode.remove();
}

// seleção do sim e não
function toggleSelect(event) {
    // retirar a classe ".active" dos botões
    document.querySelectorAll(".button-select button")
        .forEach(function (button) {
            button.classList.remove('active')
        });
    // colocar a classe ".active" no botão clicado
    const button = event.currentTarget
    button.classList.add("active");
    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    
    //verificar se sim ou não
    input.value = button.dataset.value
    // retirar a classe ".active"

}
/*
function validate(event) {

    //validar se lat e lng estão preenchidos
    const needsLatAndLng = false;
    if ( document.querySelector('[name=lat]').lat == "" &&  document.querySelector('[name=lng]').lng =="")
    needsLatAndLng = true;
    event.preventDefault()
    alert('Selecione um ponto no mapa')
}*/