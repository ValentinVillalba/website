let days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
let klaus = false;

window.addEventListener('load', mostrarDia());

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
        document.getElementById("enlace-epico").style.display = "initial";
    }
}

function checkform(form) {
    let pattern = "/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/";

    // get all the inputs within the submitted form
    let inputs = form.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        // only validate the inputs that have the required attribute
        if(inputs[i].hasAttribute("required")){
            if(inputs[i].value == ""){
                // found an empty field that is required
                document.getElementById("advertencia-form").style.display = "block";
                return false;
            }
        }
    }

    if((document.getElementById("campo-email").value).match(pattern) == null){
        document.getElementById("advertencia-form").style.display = "block";
        return false;
    }

    enviarMensaje();
    return true;
}

function enviarMensaje(){
    document.getElementById("caja-mensaje").style.display = "none";
    document.getElementById("cosas-de-arriba").style.display = "none";
    document.getElementById("caja-tcg").style.display = "none";
    document.getElementById("enviando-mensaje").style.display = "block";
}

function mostrarDia(){
    const d = new Date();
    let day = d.getDay()
    document.getElementById("dia-js").innerHTML = "the day of our lord is " + days[day];
}