import { Figura } from "./figura.js";

class Rectangulo extends Figura {
    constructor({color,area,largo,ancho}){
        super({color,area});
        this.largo = largo;
        this.ancho = ancho;
    }
    calcularArea(){
        this.area = this.ancho * this.largo
        let decirArea = document.createElement("p")
        decirArea.innerHTML = `El area del rectangulo es ${this.area}`
        return decirArea
    }
}

export {Rectangulo}