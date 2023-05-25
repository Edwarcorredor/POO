class Empleado{
    constructor({nombreEmpleado,edadEmpleado,sueldo}){
        this.nombre = nombreEmpleado;
        this.edad = edadEmpleado;
        this.sueldo = parseInt(sueldo);
    }
    calcularSalarioAnual(){
        let sueldoAnual = this.sueldo*12
        let decirSueldo = document.createElement("p")
        decirSueldo.innerHTML = `El sueldo anual es ${sueldoAnual}`
        return decirSueldo
    }
}

export {Empleado}