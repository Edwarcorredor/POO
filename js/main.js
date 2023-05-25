import { Persona } from "./persona.js";
import { Estudiante } from "./estudiante.js";
import { Animal } from "./animal.js";
import { Perro } from "./perro.js";
import { Figura } from "./figura.js";
import { Circulo } from "./circulo.js";
import { Rectangulo } from "./rectangulo.js";
import { Vehiculo } from "./vehiculo.js";
import { Coche } from "./coche.js";
import { Empleado } from "./empleado.js";
import { Gerente } from "./gerente.js";


const respuestasPersonas = document.querySelector("#respuestasPersonas");
const informacionPersona = document.querySelector("#informacionPersona");
const informacionAnimal = document.querySelector("#informacionAnimal");
const respuestasAnimal = document.querySelector("#respuestasAnimal");
const informacionFigura = document.querySelector("#informacionFigura");
const respuestasFigura = document.querySelector("#respuestasFigura");
const informacionVehiculo = document.querySelector("#informacionVehiculo")
const respuestasVehiculo = document.querySelector("#respuestasVehiculo")
const informacionEmpleado = document.querySelector("#informacionEmpleado");
const respuestasEmpleado = document.querySelector("#respuestasEmpleado");


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
    const rectangulo1 = new Rectangulo(Object.fromEntries(new FormData(e.target)));
    respuestasFigura.appendChild(rectangulo1.calcularArea())
});

informacionVehiculo.addEventListener("submit", (e)=>{
    e.preventDefault();
    const vehiculo1 = new Vehiculo(Object.fromEntries(new FormData(e.target)));
    const coche1 = new Coche(Object.fromEntries(new FormData(e.target)));
    const btnAcelerar = `
    <input type="button" value="Acelerar Vehiculo" class="btn btn-primary acelerar">
    <input type="button" value="Acelerar Coche" class="btn btn-primary acelerar">
    <input type="button" value="Convertir a MPH" class="btn btn-primary acelerar">
    `
    respuestasVehiculo.innerHTML = btnAcelerar
    const acelerar = document.querySelectorAll(".acelerar")
    console.log(acelerar)
    acelerar[0].addEventListener("click", (e)=>{
            respuestasVehiculo.appendChild(vehiculo1.acelerar())
    })
    acelerar[1].addEventListener("click", (e)=>{
            respuestasVehiculo.appendChild(coche1.acelerar())
    })
    acelerar[2].addEventListener("click", (e)=>{
            respuestasVehiculo.appendChild(Vehiculo.convertirKmHEnMph(coche1.getVelocidad))
    })
})

informacionEmpleado.addEventListener("submit", (e)=>{
    e.preventDefault();
    const empleado1 = new Empleado(Object.fromEntries(new FormData(e.target)));
    respuestasEmpleado.appendChild(empleado1.calcularSalarioAnual())
    const gerente1 = new Gerente(Object.fromEntries(new FormData(e.target)));
    respuestasEmpleado.appendChild(gerente1.calcularSalarioAnual())
})

