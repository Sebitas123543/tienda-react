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

const disponibles = productos.filter(producto => producto.stock > 0);
const producto3 = productos.find(producto => producto.id === 3);

const precioMayor = productos.filter(producto => producto.precio > 100000)
console.log(precioMayor);

const productosRango = productos.filter (producto => producto.precio >= 50000 && producto.precio <= 200000);
console.log(productosRango);

const productosHardware = productos.filter (producto => producto.categoria === "Hardware" );
console.log(productosHardware);

const filtrarId = productos.filter(producto => producto.id === 5);
console.log(filtrarId);

const buscarProducto = (id) => {return productos.find(producto => producto.id === id);};

console.log(buscarProducto(5));