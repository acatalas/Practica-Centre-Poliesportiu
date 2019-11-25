function checkPassword(password) {
    if (checkLength(password, 8, 16) &&
        hasUppercaseLetter(password) &&
        hasLowerCaseLetter(password) &&
        hasNumber(password) &&
        hasSpecialChars(password)) {
            
        document.getElementById('resposta').innerText = "La contrassenya es segura";
    } else {
        document.getElementById('resposta').innerText = "La contrassenya NO es segura";
    }
}

function checkLength(password, minLength, maxLength) {
    if (password.length >= minLength && password.length <= maxLength) {
        return true;
    } else {
        return false;
    }
}

function hasUppercaseLetter(password) {
    for (var i = 0; i < password.length; i++) {
        if (password.charAt(i) == password.toUpperCase().charAt(i)) {
            return true;
        }
    }
    return false;
}

function hasLowerCaseLetter(password) {
    for (var i = 0; i < password.length; i++) {
        if (password.charAt(i) == password.toLowerCase().charAt(i)) {
            return true;
        }
    }
    return false;
}

function hasNumber(password) {
    for (var i = 0; i < password.length; i++) {
        if (password.charAt(i) >= '0' && password.charAt(i) <= '9') {
            return true;
        }
    }
    return false;
}

function hasSpecialChars(password) {
    for (var i = 0; i < password.length; i++) {
        if (password.charAt(i) == '-' || password.charAt(i) == '_' || password.charAt() == '@' ||
            password.charAt(i) == '#' || password.charAt(i) == '$' || password.charAt(i) == '%' || password.charAt(i) == '&') {
            return true;
        }
    }
    return false;
}