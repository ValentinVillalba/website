let klaus = false;

function cambiarImagen(){
    let img = document.getElementById("imagen-epica");
    let newWidth = img.clientWidth * 1.5;
    let newHeight = img.clientHeight * 1.5;

    if(newWidth < 1500 && newHeight < 1500 && klaus == false){
        img.style.width = newWidth.toString().concat("px");
        img.style.height = newHeight.toString().concat("px");
    }

    else{
        klaus = true;
        img.style.width = "200px";
        img.style.height = "200px";
        img.src = "images/you-will-own-nothing.jpg"
        document.getElementById("titulo-epico").innerHTML = "you will own nothing."
        img.classList.remove("puntero");
        document.getElementById("enlace-epico").style.display = "block";
    }
}