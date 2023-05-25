class Figura{
    constructor({color,area}){
        this.color = color
        this.area = area
    }
    calcularArea(){
        let decirArea = document.createElement("p")
        decirArea.innerHTML = `El area de la figura es ${this.area}`
        return decirArea
    }
}
export {Figura}