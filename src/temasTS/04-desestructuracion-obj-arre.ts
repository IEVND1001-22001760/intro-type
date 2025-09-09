
interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;

}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor:Reproductor={
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles:{
        autor: 'Ed Sheran',
        anio: 2015
    }
}
console.log('El volumen actual es: ', reproductor.volumen);
console.log('El segundo actual es: ', reproductor.segundo);
console.log('La cancion actual es: ', reproductor.cancion);
console.log('El autor es: ', reproductor.detalles.autor);


const {volumen, segundo, cancion, detalles}=reproductor;
const {autor:nuevoauto, anio}=detalles;
console.log('El volumen actual es: ', volumen);
console.log('El segundo actual es: ', segundo);
console.log('La cancion actual es: ', cancion);
//console.log('El autor es: ', autor);
console.log('El autor es: ', nuevoauto);
console.log('El año es: ', anio);

const dbz:string[]=['Goku', 'Vegeta', 'Trunks'];
const [p1, p2, p3]=dbz;
console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);

//las , estan simulando el espacio de los personajes
const [,,p4]=dbz;
console.log('Personaje 4: ', p4);

