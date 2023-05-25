import { Persona } from "./persona.js";
import { Estudiante } from "./estudiante.js";
import { Animal } from "./animal.js";

const respuestasPersonas = document.querySelector("#respuestasPersonas");
const informacionPersona = document.querySelector("#informacionPersona");
const informacionAnimal = document.querySelector("#informacionAnimal");
const respuestasAnimal = document.querySelector("#respuestasAnimal");

informacionPersona.addEventListener("submit", (e) => {
    e.preventDefault();
    const persona1 = new Persona(Object.fromEntries(new FormData(e.target)))
    respuestasPersonas.appendChild(persona1.saludar())
    const estudiante1 = new Estudiante(Object.fromEntries(new FormData(e.target)));
    respuestasPersonas.appendChild(estudiante1.saludar())
    respuestasPersonas.appendChild(estudiante1.estudiar())
    respuestasPersonas.appendChild(Persona.esMayorDeEdad(persona1.getEdad))
})

informacionAnimal.addEventListener("submit", (e)=>{
    e.preventDefault();
    const animal1 = new Animal(Object.fromEntries(new FormData(e.target)));
    respuestasAnimal.appendChild(animal1.hacerSonido())
})
