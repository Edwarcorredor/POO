import { Persona } from "./persona.js";

class Estudiante extends Persona {
    constructor({name,edad,sexo,carrera}){
        super({name,edad,sexo});
        this.carrera = carrera;
    }
    estudiar(){
        let decirCarrera = document.createElement("p")
        decirCarrera.innerHTML = `La carrera que estudio actualmente es ${this.carrera}`
        return decirCarrera
    }
}

export {Estudiante}