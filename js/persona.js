class Persona{
    constructor({name,edad,sexo}){
        this.name = name
        this.edad = edad
        this.sexo = sexo
    }
    saludar(){
        let decirNombre = document.createElement("p")
        decirNombre.innerHTML = `Hola, mi nombre es ${this.name}`
        return decirNombre
    }
}

export {Persona}