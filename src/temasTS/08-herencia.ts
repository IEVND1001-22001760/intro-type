
//clase padre
//se heredan a la clase empleado se utiliza la clase extends
class Persona3{
    protected nombre1:string;
    protected edad:number;
    protected direccion:string;
    constructor(nombre1:string, edad:number, direccion:string){
        this.nombre1 = nombre1;
        this.edad = edad;
        this.direccion = direccion;
    }
    mostrarPersona(){
        console.log(`Nombre: ${this.nombre1},
            Edad: ${this.edad},
            Direccion: ${this.direccion}`);
    }
}
//el constructor tambien deben ser heredados a la clase empleado
class Empleado3 extends Persona3{
    private sueldo:number;
    constructor(nombre1:string, edad:number, direccion:string, sueldo:number){
        //al agregar los parametros aqui podemos usar y heredar con la palabra super
        super(nombre1, edad, direccion);
        this.sueldo=sueldo;
    }
    mostrarEmpleado(){
        this.mostrarPersona();
        console.log(`Sueldo: ${this.sueldo}`);
    }
}
const empleado3 = new Empleado3('Irene', 23, 'Calle Pza. Vitrales 117', 50000);
empleado3.mostrarEmpleado();