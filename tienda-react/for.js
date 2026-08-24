const productos = [
{ id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 },
{ id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
{ id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3 },
{ id: 4, nombre: 'Grafica', precio: 150000, categoria: 'Hardware', stock: 1 },
{ id: 5, nombre: 'Placa base', precio: 120000, categoria: 'Hardware', stock: 2 },
{ id: 6, nombre: 'Refrigeración', precio: 650000, categoria: 'Hardware', stock: 4 },
{ id: 7, nombre: 'Procesador', precio: 400000, categoria: 'Hardware', stock: 0 },
{ id: 8, nombre: 'Impresora', precio: 123000, categoria: 'Electrodomestico', stock: 6 },
{ id: 9, nombre: 'Usb', precio: 20000, categoria: 'Hardware', stock: 3 },
{ id: 10, nombre: 'Espacio SSD', precio: 143000, categoria: 'Hardware', stock: 0 }
];

const nombres = productos.map(producto => producto.nombre);
console.log(nombres);

const preciosConIva = productos.map(producto => producto.precio * 1.19);
console.log(preciosConIva);

const nombresMayuscula = productos.map(producto => producto.nombre.toUpperCase());
console.log(nombresMayuscula);

const resumenProductos = productos.map( producto => `${producto.nombre} cuesta $${producto.precio}`);
console.log(resumenProductos);