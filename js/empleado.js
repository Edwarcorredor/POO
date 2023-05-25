class Empleado{
    static id=0;
    constructor({nombreEmpleado="a",edadEmpleado="a",sueldo=1, id=0}){
        this.nombre = nombreEmpleado;
        this.edad = edadEmpleado;
        this.sueldo = parseInt(sueldo);
        Empleado.generarIdEmpleado(id);
    }

    calcularSalarioAnual(){
        let sueldoAnual = this.sueldo*12
        let decirSueldo = document.createElement("p")
        decirSueldo.innerHTML = `El sueldo anual es ${sueldoAnual}`
        return decirSueldo
    }

    static generarIdEmpleado(p1){
        Empleado.id++;
    }
}

let obj = new Empleado({});
console.log(Empleado.id);
let obj2 = new Empleado({id: Empleado.id});
console.log(Empleado.id);
let obj3 = new Empleado({id: Empleado.id});
console.log(Empleado.id);

export {Empleado}