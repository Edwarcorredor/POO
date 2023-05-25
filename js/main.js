import { Persona } from "./persona.js";
import { Estudiante } from "./estudiante.js";
import { Animal } from "./animal.js";
import { Perro } from "./perro.js";
import { Figura } from "./figura.js";
import { Circulo } from "./circulo.js";

const respuestasPersonas = document.querySelector("#respuestasPersonas");
const informacionPersona = document.querySelector("#informacionPersona");
const informacionAnimal = document.querySelector("#informacionAnimal");
const respuestasAnimal = document.querySelector("#respuestasAnimal");
const informacionFigura = document.querySelector("#informacionFigura");
const respuestasFigura = document.querySelector("#respuestasFigura");

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
    const perro1 = new Perro(Object.fromEntries(new FormData(e.target)));
    respuestasAnimal.appendChild(perro1.moverCola())
})

informacionFigura.addEventListener("submit", (e)=>{
    e.preventDefault();
    const figura1 = new Figura(Object.fromEntries(new FormData(e.target)));
    respuestasFigura.appendChild(figura1.calcularArea())
    const circulo1 = new Circulo(Object.fromEntries(new FormData(e.target)));
    respuestasFigura.appendChild(circulo1.calcularArea()); 
});
