
function calcularIVA(costoTotal) {
    let iva = costoTotal * 0.21;
    return iva;
}
calcularIVA()

if (confirm("Bienvenido/a a tu calculadora de precios de Tatiana Monteyano. ¿Querés saber el costo total de tus productos seleccionados de antemano?")) {
    console.log("Continuar");

    let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos que desea calcular:"));
    let costoTotal = 0;

    for (let contador = 1; contador <= cantidadProductos; contador++) {
        let producto = prompt(`Ingrese el nombre del Producto ${contador}:`);
        let precioProducto = parseFloat(prompt(`Introduzca el precio del Producto ${producto}:`));
    
        if (isNaN(precioProducto)) {
            alert("El precio ingresado no es válido. Inténtalo nuevamente.");
        } else {
            costoTotal += precioProducto;
        }
    }
    let iva = calcularIVA (costoTotal)
    let totalConIVA = costoTotal + calcularIVA(costoTotal);
    alert(`El costo total de los productos es: $${costoTotal}`);
    alert(`El IVA a pagar es: $${iva}`);
    alert(`El costo total con IVA es: $${totalConIVA}`);
    console.log(`El costo total es: $${costoTotal}`);
} else {
    console.log("No continuar");
    alert("¡Te esperamos pronto!");
}
