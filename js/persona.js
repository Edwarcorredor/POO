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
    
    get getEdad(){
        return this.edad
    }

    static esMayorDeEdad(edad){
        let resultado 
        let decirResultado = document.createElement("p")
        if(edad > 18){
            resultado = true
        }
        else{
            resultado = false
        }
        decirResultado.innerHTML = `¿Soy mayor de edad? Rta: ${resultado}`
        return decirResultado
    }
}

export {Persona}