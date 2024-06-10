let menuVisible =false;
//funcion para ocultar o mostrar menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible =true;
    }
}

function seleccionar(){
    //ocultar el menu un avez que seleccione una opcion 
    document.getElementById("nav").classList= "";
    menuVisible= false;
}

//funcion para aplicar las animaciones de las habilidades 
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_habilidades>= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("php");
        habilidades[1].classList.add("python");
        habilidades[2].classList.add("htmlcss");
        habilidades[3].classList.add("javascript");
        habilidades[4].classList.add("bootstrap");
        habilidades[5].classList.add("mysql");
        habilidades[6].classList.add("sqlserver");
        habilidades[7].classList.add("git");
        habilidades[8].classList.add("github");
        habilidades[9].classList.add("comunicacion");
        habilidades[10].classList.add("trabajoequipo");
        habilidades[11].classList.add("disciplina");
        habilidades[12].classList.add("aprendizaje");
        habilidades[13].classList.add("creativa");
        habilidades[14].classList.add("autodidacta");
    }
}

//detecto el scrolling para aplicar la animacion de la barra habilidades
window.onscroll = function(){
    efectoHabilidades();
}

