import { Animal } from "./animal.js";

class Perro extends Animal {
    constructor({nameAnimal,edadAnimal,raza}){
        super(nameAnimal,edadAnimal);
        this.raza =raza;
    }
    moverCola(){
        let decirMover = document.createElement("p")
        decirMover.innerHTML = `El perro esta moviendo la cola`
        return decirMover
    }
}

export {Perro}