function button(){
    var x = document.getElementById("myTopnav");
    if (x.className === "hleft") {
        x.className += "responsive";
    }else{
        x.className = "hleft";
    }
}