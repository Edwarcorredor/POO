import { Figura } from "./figura.js";

class Circulo extends Figura {
    constructor({color,area,radio}){
        super({color,area});
        this.radio = radio;
    }
    calcularArea(){
        this.area = Math.PI * Math.pow(this.radio, 2);
        let decirArea = document.createElement("p")
        decirArea.innerHTML = `El area del circulo es ${this.area}`
        return decirArea
    }
}

export {Circulo}