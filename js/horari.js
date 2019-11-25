var dies =  ['Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte', 'Diumenge'];
var activitats = ['Cross Training', 'Tonificación', 'Fit Combat', 'Running', 'Zumba', 'Step', 'Pilates', 'Spinning'];
mostraHorariMati();
mostraHorariCapvespre();

function mostraHorariMati(){
    var taula = document.createElement('table');
    taula.appendChild(generaFilaHeader(dies.length - 2));

    //per totes les hores que s'han de mostrar (files)
    for(var i = 9; i < 15; i+=2){
        taula.appendChild(generaFila(i, i+2, dies.length - 2));
    }
    document.getElementById('horari-mati').appendChild(taula);
}

function mostraHorariCapvespre(){
    var taula = document.createElement('table');
    taula.appendChild(generaFilaHeader(dies.length));

    //per totes les hores que s'han de mostrar (files)
    for(var i = 16; i < 21; i++){
        taula.appendChild(generaFila(i, i+1, dies.length));
    }
    document.getElementById('horari-capvespre').appendChild(taula);
}

function generaFila(horaInici, horaFi, numColumnes){
    var fila = document.createElement('tr');
    fila.appendChild(generaCelaHora(horaInici, horaFi));
    
    //per tots els dies que s'han de mostrar (cel·les)
    for(var j = 0; j < numColumnes; j++){
        var columna = document.createElement('td');
        columna.innerText = activitats[Math.floor(Math.random() * activitats.length)];
        fila.appendChild(columna);
    }
    
    return fila;
}

function generaCelaHora(horaInici, horaFi){
    var cela = document.createElement('td');
    cela.innerText = "" + horaInici + ":00 - " + horaFi + ":00";
    return cela;
}

function generaFilaHeader(numDies){
    //Genera fila del header
    var header = document.createElement('tr');

    //Afegeix primera cel·la buida
    header.appendChild(document.createElement('th'));

    //Genera cel·les dels dies
    for(var i = 0; i < numDies; i++){
        var cela = document.createElement('th');
        cela.innerText = dies[i];
        header.appendChild(cela);
    }
    return header;
}