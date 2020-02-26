/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/


function Sumar() {

    var precioUno;
    var precioDos;
    var precioTres;
    var suma;

    precioUno = document.getElementById("PrecioUno").value;
    precioDos = document.getElementById("PrecioDos").value;
    precioTres = document.getElementById("PrecioTres").value;
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);
    suma = precioUno + precioDos + precioTres;
    alert("la suma es :"+suma);
}
function Promedio() {

    var precioUno;
    var precioDos;
    var precioTres;
    var promedio;

    precioUno = document.getElementById("PrecioUno").value;
    precioDos = document.getElementById("PrecioDos").value;
    precioTres = document.getElementById("PrecioTres").value;
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);
    promedio = (precioUno + precioDos + precioTres)/3;
    alert("el promedio es :"+promedio);

}
function PrecioFinal() {

    var precioUno;
    var precioDos;
    var precioTres;
    var precioFinal;
    //var iva;

    precioUno = document.getElementById("PrecioUno").value;
    precioDos = document.getElementById("PrecioDos").value;
    precioTres = document.getElementById("PrecioTres").value;
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);
    //iva = (precioUno + precioDos + precioTres)*21/100;
    //precioFinal=(precioUno+precioDos+precioTres+iva);
    precioFinal=(precioUno+precioDos+precioTres+(precioUno+precioDos+precioTres)*21/100);
    alert("el precio final es :"+precioFinal);

}