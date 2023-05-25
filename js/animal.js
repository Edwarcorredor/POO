class Animal{
    constructor({nameAnimal,edadAnimal}){
        this.nameAnimal = nameAnimal
        this.edadAnimal = edadAnimal
    }
    hacerSonido(){
        let decirSonido = document.createElement("p")
        decirSonido.innerHTML = `El sonido que hace el animal es de ${this.nameAnimal}`
        return decirSonido
    }
}

export {Animal}