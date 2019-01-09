document.addEventListener("DOMContentLoaded",cargar,false);

function cargar(){
document.getElementById("nombre").addEventListener("change",lider,false);
}

function lider(){

    let elegido = document.getElementById("nombre").value;
    console.log(elegido);

    if(elegido){

    }
    
}
