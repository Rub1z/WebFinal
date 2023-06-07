function button(){
    var x = document.getElementById("myTopnav");
    if (x.className === "hleft") {
        x.className += "responsive";
    }else{
        x.className = "hleft";
    }
}

function registro(){
    var name = document.getElementById("name");
    var surname = document.getElementById("surname");
    var user = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    emailvalid = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if(name.value == ""){
        alert("Ingrese su nombre");
        name.focus();
        return false;
    }
    else if(surname.value == ""){
        alert("Ingrese su apellido");
        surname.focus();
        return false;
    }
    
    else if(user.value == ""){
        alert("Ingrese su nombre de usuario");
        user.focus();
        return false;
    }

    else if(email.value == ""){
        alert("Ingrese su correo");
        email.focus();
        return false;
    }
    else if(emailvalid.test(email.value) == false){
        alert("Su correo no es valido");
        email.focus();
        return false;
    }
    else if(password.value == ""){
        alert("Ingrese su contraseña");
        password.focus();
        return false;
    }
    else{
        document.getElementById("msg").innerHTML = "Usario: " + user.value + " registrado correctamente";
    }
    return true;

}