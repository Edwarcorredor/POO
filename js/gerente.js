import { Empleado } from "./empleado.js";

class Gerente extends Empleado {
    constructor({nombre, apellido, salario, departamento}) {
        super({nombre, apellido, salario});
        this.departamento = departamento;
    }
    calcularSalarioAnual(){
        this.sueldo += this.sueldo*0.1
        let sueldoAnual = this.sueldo*12
        let decirSueldo = document.createElement("p")
        decirSueldo.innerHTML = `El sueldo anual es ${sueldoAnual}`
        return decirSueldo
    }
}

export { Gerente }