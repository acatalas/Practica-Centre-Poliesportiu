function calculaCategoria() {
    var any = document.getElementById("any").value;
    if (any > new Date().getFullYear()) {
        mostraErrorCategoria("Introdueix un any vàlid.");
    }
    mostraCategoria(any);
}

function mostraErrorCategoria(error) {
    document.getElementById('categoria-info').innerHTML = "<p class='red'>" + error + "</p>";
}

function mostraCategoria(any) {
    var edat = new Date().getFullYear() - any;
    var categoria;
    if (edat <= 8) {
        categoria = "Pre-Benjamin";
    } else if (edat <= 10) {
        categoria = "Benjamin";
    } else if (edat <= 12) {
        categoria = "Alevin";
    } else if (edat <= 14) {
        categoria = "Infantil";
    } else if (edat <= 16) {
        categoria = "Cadete";
    } else if (edat <= 19) {
        categoria = "Juvenil";
    } else {
        categoria = "Sènior";
    }
    document.getElementById('categoria-info').innerText = categoria;
}