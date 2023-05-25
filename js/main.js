import { Persona } from "./persona.js";
import { Estudiante } from "./estudiante.js";

const respuestas = document.querySelector("#respuestas");
const informacion = document.querySelector("#informacion");

informacion.addEventListener("submit", (e) => {
    e.preventDefault();
    const persona1 = new Persona(Object.fromEntries(new FormData(e.target)))
    respuestas.appendChild(persona1.saludar())
    const estudiante1 = new Estudiante(Object.fromEntries(new FormData(e.target)));
    respuestas.appendChild(estudiante1.saludar())
    respuestas.appendChild(estudiante1.estudiar())
    respuestas.appendChild(Persona.esMayorDeEdad(persona1.getEdad)) 
})
