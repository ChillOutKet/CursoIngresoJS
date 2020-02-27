function mostrar() {
    var numeroUno;
    var numeroDos;
    var suma;

    numeroUno = parseInt(prompt("Ingrese un numero"));
    while (isNaN(numeroUno) || numeroUno < 0) {
        numeroUno = parseInt(prompt("Dato invalido, ingrese un numero"));
    }
    numeroDos = parseInt(prompt("Ingrese otro numero"));
    while (isNaN(numeroDos) || numeroDos < 0) {
        numeroDos = parseInt(prompt("Dato invalido, ingrese otro numero"));
    }
    if (numeroUno == numeroDos) {
        alert(numeroUno + "" + numeroDos);
    } else if (numeroUno > numeroDos) {
        alert(numeroUno - numeroDos);

    } else {
        suma = (numeroUno + numeroDos);
        if (suma > 10) {
            alert("la suma es " + suma + " y es mayor a 10");
        } else {
            alert(suma);
        }
    }
}
