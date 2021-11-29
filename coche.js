class Coche {
    constructor() {
        this.arrancado = false;
        this.cantidad_deposito = 100;
        this.consumo = 8 / 100;
        this.x = 0;
        this.y = 0;
        this.km_recorridos = 0;
        this.nivel_gasolina = 100;
        this.circuito = null;
        this.consola = false;
    }

    mover(coche, event) {
        switch (event.key) {
            case "a":
            case "A":
                if((parseInt(coche.car[0].style.left) - 10)>=0) {
                    coche.car[0].style.left =  (parseInt(coche.car[0].style.left) - 10)+'px';
                    if(this.nivel_gasolina < 0) {
                        this.arrancado = false;  
                    } else {
                        coche.consumirGasolina(); 
                    }
                }
                coche.car[0].style.transform = 'rotate(0deg)';
                break;
            case "w":
            case "W":
                if((parseInt(coche.car[0].style.top) - 60)>=0) {
                    coche.car[0].style.top = (parseInt(coche.car[0].style.top) - 10)+'px';
                    if(this.nivel_gasolina < 0) {
                        this.arrancado = false;  
                    } else {
                        coche.consumirGasolina(); 
                    }
                }
                coche.car[0].style.transform = 'rotate(90deg)';
                break;
            case "s":
            case "S":
                if(parseInt(coche.car[0].style.top)<=(parseInt(window.innerHeight)-160)) {
                    coche.car[0].style.top =  (parseInt(coche.car[0].style.top) + 10)+'px';
                    if(this.nivel_gasolina < 0) {
                        this.arrancado = false;  
                    } else {
                        coche.consumirGasolina(); 
                    } 
                }
                coche.car[0].style.transform = 'rotate(270deg)';
                break;
            case "d":
            case "D":
                if(parseInt(coche.car[0].style.left)<=(parseInt(window.innerWidth)-210)) {
                    coche.car[0].style.left =  (parseInt(coche.car[0].style.left) + 10)+'px';
                    if(this.nivel_gasolina < 0) {
                        this.arrancado = false;  
                    } else {
                        coche.consumirGasolina(); 
                    }
                }
                coche.car[0].style.transform = 'rotate(180deg)';
                break;
            case "r":
            case "R":
                this.respostar();
                break;
            case "v":
            case "V":   
                this.verConsola();
                break;
        }
    }

    respostar() {
        let litros_gasolina = prompt('Necesitas repostar');
        if (litros_gasolina == " " || litros_gasolina == "") {
            coche.nivel_gasolina = 100;
        } else {
            if(litros_gasolina < 100) {
                coche.nivel_gasolina = litros_gasolina;
            } else {
                coche.nivel_gasolina = 100;
            }
        }
    }

    consumirGasolina() {
        this.km_recorridos += 10;
        let gasto = 10 * this.consumo;
        this.nivel_gasolina -= gasto; 
        return this.nivel_gasolina;
    }

    verConsola() {
        let lista = document.getElementById('consola');
        if(!this.consola) {
            let km_recorribles = parseFloat(this.cantidad_deposito) - parseFloat(this.nivel_gasolina);
            let litrosRestantes = Math.round(parseFloat(this.cantidad_deposito) - parseFloat(km_recorribles), 2); 
                        lista.innerHTML = `
                            <li>KM que puedes recorrer: ${Math.round(this.nivel_gasolina)}</li>
                            <li>KM recorridos: ${this.km_recorridos}</li>
                            <li>Listros restantes: ${litrosRestantes}</li>`;
                            lista.style.color = "white";
        } else {
            lista.innerHTML = "";
        }
        this.consola = !this.consola;
    }
}