function button(){
    var x = document.getElementById("myTopnav");
    if (x.className === "hleft") {
        x.className += "responsive";
    }else{
        x.className = "hleft"
    }
}

function inicio(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    emailvalid = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if(email.value == ""){
        alert("Ingrese su correo");
        email.focus();
        return false;
    }
    if(emailvalid.test(email.value) == false){
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
        document.getElementById("msg").innerHTML = "Su email: " + email.value + " y su contraseña son correctos";
    }
    return true;

}