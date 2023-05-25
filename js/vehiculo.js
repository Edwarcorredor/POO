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
    get getVelocidad(){
        return this.velocidad
    }
    static convertirKmHEnMph(velocidad){
        let decirKmHEnMph = document.createElement("p")
        let Mph = velocidad/1.60934
        decirKmHEnMph.innerHTML = `La velocidad del vehiculo es ${Mph} mph`
        return decirKmHEnMph
    }

}

export {Vehiculo}