coche.circuito = document.getElementById('circuito');
coche.car = document.getElementsByTagName('img');
coche.car[0].style.top = 0;
coche.car[0].style.left = 0;
coche.car[0].style.tranfrom = "rotate(0deg)";

window.addEventListener('keyup', (event) => {
    if(parseFloat(coche.nivel_gasolina) > 0) {
        if(event.key == " ") {
            coche.arancado = !coche.arancado;
        }
    } else {
        if(coche.arancado && coche.nivel_gasolina > 0) {
            coche.mover(coche, event);
        }
    }
})

window.addEventListener("keydown", function(event) {
    if(coche.arancado && coche.nivel_gasolina >= 1) {
        coche.mover(coche, event);
    } else {
        if (event.key == "r" || event.key  == "R") {
            coche.respostar();
        } 
        if((event.key == "v" || event.key == "V")) {
            let listaElementos = coche.verConsola();
        } 
    }
});
