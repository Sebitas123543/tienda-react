function calcularTotal(precio, cantidad) {
const total = precio * cantidad;
return total;
}
const resultado = calcularTotal(50000, 3);
console.log(resultado);

function suma(a, b){
    const total = a + b ;
    return total
}
const sumar = suma(40, 2)
console.log(sumar);

function resta(c, d){
    const total = c - d;
    return total
}
const restar = resta(59, 22)
console.log(restar);

function multiplicacion(e, f){
    const total = e * f;
    return total
}
const multi = multiplicacion(59, 22)
console.log(multi);

function division(g, h){
    const total = g / h;
    return total
}
const divi = division(59, 22)
console.log(divi);

function calcularPromedio(nota1, nota2, nota3){
    const promedio= (nota1 + nota2 + nota3) / 3
    return promedio
}
const promediado = calcularPromedio(3,2,4)
console.log(promediado);

//EL CONSOLE LOG MUESTRA ALGO EN LA CONSOLA Y EL RETURN DEVUELVE UN VALOR