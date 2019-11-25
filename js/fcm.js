

function calculaFCM(){
    var edat = document.getElementById("edat").value;
    var selectSexe = document.getElementById("sexe");
    var sexe = selectSexe.options[selectSexe.selectedIndex].value;
    if(isNaN(edat)){
        mostraErrorFCM("L'edat no és correcte.");
    }
    var fcm = mostraFCM(edat, sexe);
    mostraZones(fcm);
}

function mostraFCM(edat, sexe){
    if(sexe == "mascle"){
        document.getElementById("fcm-info").innerHTML = "Freqüència Cardíaca Màxima: " +  (220 - edat);
        return 220 - edat;
    } else {
        document.getElementById("fcm-info").innerHTML = "Freqüència Cardíaca Màxima: " + (226 - edat);
        return 226 - edat;
    }
}

function mostraErrorFCM(error){
    document.getElementById("fcm-info").innerHTML = "<p class='red'>" + error + "</p>";
}

function mostraZones(fcm){
    mostraZona("Zona de recuperació (60% - 70%): ", fcm, 0.6, 0.7);
    mostraZona("Zona aeròbica (70% - 80%): ", fcm, 0.7, 0.8);
    mostraZona("Zona anaeròbica (80% - 90%): ", fcm, 0.8, 0.9);
    mostraZona("Línia vermella (90% - 100%): ", fcm, 0.9, 1);
}
function mostraZona(zona, fcm, min, max){
    document.getElementById("fcm-info").innerHTML += "<p>" + zona + Math.round(fcm * min) + "-" + Math.round(fcm * max) + "</p>";
}