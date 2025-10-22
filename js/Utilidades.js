function crearElemento(tag) {

    return document.createElement(tag);
}

function adicionarTextoATag(tag, texto) {

    tag.innerHTML = texto;

}



function adicionarTextoAContenedor(tag, contenedor) {

    contenedor.appendChild(tag);



}

function adicionarTagABody(tag) {


    document.body.appendChild(tag);



}

function crearTagConTexto(tag, texto) {

    var tag = crearElemento(tag);

    adicionarTextoATag(tag, texto);

    return tag;

}

function crearTagConTextoAdicionarABody(tag, texto) {

    var tag = crearTagConTexto(tag, texto);
    adicionarTagABody(tag);

}

function crearImg(src, alt) {

    var img = crearElemento('img');
    img.src = src;
    img.alt = alt;
    return img;

}
