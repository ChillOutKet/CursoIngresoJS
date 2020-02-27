function mostrar() {
    var precio;
    var porcDescuento;
    var descuento;
    var precioFinal;


    precio = parseInt(prompt("Ingrese un precio"));
    while (isNaN(precio) || precio < 1) {
        precio = parseInt(prompt("Dato invalido, ingrese un precio"));
    }
    porcDescuento = parseInt(prompt("Ingrese un porcentaje de descuento"));
    while (isNaN(porcDescuento) || porcDescuento < 0) {
        porcDescuento = parseInt(prompt("Dato invalido, ingrese un porcentaje de descuento"));
    }
    descuento = precio * porcDescuento / 100;
    precioFinal = precio - descuento;
    document.getElementById("elPrecioFinal").value = precioFinal;


}
