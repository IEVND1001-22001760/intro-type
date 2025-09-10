
//para importamos alguna interface o funcion
//agregamos type para agregar alguna funcion como opcional
import { calcularIVA2, type Producto } from "./05-desestructuracion-funciones";

const carrito:Producto[] = [
    {
        nombre: 'Iphone 14',
        precio: 1500
    },
    {
        nombre: 'Ipad Air',
        precio: 900
    },
    {
        nombre: 'Macbook Pro',
        precio: 2500
    }
];

const [total, iva] = calcularIVA2(carrito);
console.log(`El total es: ${total}`);
console.log(`El IVA es: ${iva}`);