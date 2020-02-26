function mostrar() {
    var contador;
    var numero;
    var contadorPares=0;

    numero = parseInt(prompt("ingrese un numero"));

    while (isNaN(numero) || numero < 1) {
        numero = parseInt(prompt("Dato invalido, ingrese un numero"));
    }

    for (contador = 1; contador <= numero; contador++) {

        if (contador % 2 == 0) {
            console.log(contador)
            contadorPares++;
    
        }

    }
    console.log("Cantidad de numeros pares: "+contadorPares);




}//FIN DE LA FUNCIÓN