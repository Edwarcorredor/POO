import { Vehiculo } from "./vehiculo.js";

class Coche extends Vehiculo {
    constructor({marca,modelo,velocidad,combustible}) {
        super({marca,modelo,velocidad});
        this.combustible = combustible;
    }
    acelerar(){
        this.velocidad += 20
        let decirVelocidad = document.createElement("p")
        decirVelocidad.innerHTML = `La velocidad del vehiculo es ${this.velocidad}`
        return decirVelocidad
    }
}

export {Coche}