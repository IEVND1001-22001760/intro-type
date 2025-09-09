
//debemos crear una interfaz para asignar el tipo de datos
//es muy importante para typescript asignar el tipo de dato

interface Alumno {
    nombre: string;
    edad: number;
    curso: string;
    email?: string; //si asignamos un dato con ? puede ser una propiedad opcional 
    nota: number | string; 
}




const alumno:Alumno ={
    edad: 23,
    nombre: "Juan",
    curso: "TypeScript",
    email: "irene@gmail.com",
    nota: 7.5
}

console.log(`El alumno ${alumno.nombre} tiene ${alumno.edad} años y su nota es ${alumno.nota}`);

let mascotas:string[]=["Perro", "Gato", "Hamster"];
mascotas[1]='Pajaro';
mascotas.push('Tortuga');
console.log(mascotas);

let notas:(number|string)[]=[7 ,8 ,9 , 'Aprobado'];
notas.push(10);
notas.push('Sobresaliente');
console.log(notas)