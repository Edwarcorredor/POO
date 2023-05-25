class Vehiculo{
    constructor({marca,modelo,velocidad}){
        this.marca = marca
        this.modelo = modelo
        this.velocidad = parseInt(velocidad) 
    }
    acelerar(){
        this.velocidad += 10
        let decirVelocidad = document.createElement("p")
        decirVelocidad.innerHTML = `La velocidad del vehiculo es ${this.velocidad}`
        return decirVelocidad
    }

}

export {Vehiculo}