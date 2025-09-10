//para poder exportarlo y porder utilizarlo en otro archivo agregamos
//export

export interface Producto{
    nombre: string;
    precio: number;
}
const telefono:Producto={
    nombre: 'Iphone 14',
    precio: 1500
}
const tablet:Producto={
    nombre:'Ipad Air',
    precio: 900
}
function calcularIVA(productos:Producto[]):number{
    let total = 0;
    for(let producto of productos){
        total += producto.precio;
    }
    return total*0.21;
}

const articulos=[telefono, tablet];
const iva=calcularIVA(articulos);
console.log(`El IVA es: ${iva}`);
//estructuracion de la funcion
//aun no se desestructura
//una funcion no admite regresar mas de un valor

export function calcularIVA2(productos:Producto[]):[number,number]{
    let total = 0;
    for(let producto of productos){
        total+=producto.precio;
    }
    return [total, total*0.21];
}
const [total, ivaDos]=calcularIVA2(articulos);
console.log(`El total es: ${total}`);
console.log(`El IVA es : ${ivaDos}`)


