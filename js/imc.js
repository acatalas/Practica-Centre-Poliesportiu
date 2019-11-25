
function calculaIMC() {
    eliminaResultatsPrevis();
    
    var pes = document.getElementById('pes').value;
    var altura = document.getElementById('altura').value;
    var imc = (pes / (altura * altura)).toFixed(2);
    
    if(pes == 0 || altura == 0){
        mostraErrorIMC("Recordi emplenar els camps de pes i altura."); 
    } else if (isNaN(pes)) {
        mostraError("El pes no està en un format correcte.");
    } else if (isNaN(altura)) {
        mostraErrorIMC("L'altura no està en un format correcte. Recordi que s'ha d'escriure amb decimals (1.56)");
    } else {
        document.getElementById('imc-info').innerHTML = imc;
        resaltaTaula(imc);
    }
    
    
}

function eliminaResultatsPrevis(){
    var redElements = document.getElementsByClassName('red');
    if(redElements.length > 0){
        for(var i = 0; i < redElements.length; i++){
            redElements[i].classList.remove('red');
        }
    }
}

function mostraErrorIMC(error){
    document.getElementById('imc-info').innerHTML = "<p class='red'>" + error + "</p>";
}

function resaltaTaula(imc){
    if (imc < 16) {
        document.getElementById('infrapeso1').classList.add('red');
    } else if (imc >= 16 && imc < 17) {
        document.getElementById('infrapeso2').classList.add('red');
    } else if (imc >= 17 && imc < 18.5) {
        document.getElementById('infrapeso3').classList.add('red');
    } else if (imc >= 18.5 && imc < 25) {
        document.getElementById('normal').classList.add('red');
    } else if (imc >= 25 && imc < 30) {
        document.getElementById('sobrepeso').classList.add('red');
    } else if (imc >= 30 && imc < 35) {
        document.getElementById('obeso1').classList.add('red');
    } else if (imc >= 35 && imc <= 40) {
        document.getElementById('obeso2').classList.add('red');
    } else if (imc > 40) {
        document.getElementById('obeso3').classList.add('red');
    }
}

