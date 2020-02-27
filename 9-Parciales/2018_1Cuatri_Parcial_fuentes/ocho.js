function mostrar() {
    var letra;
    var numero;
    var contadorPares = 0;
    var contadorImpares = 0;
    var contadorCeros = 0;
    var acumuladorPositivos = 0;
    var acumuladorNegativos = 0;
    var mayor;
    var menor;
    var letraMayor;
    var letraMenor;
    var flag = 0;
    var contador = 0;
    var seguir;
    var promedioPos;

    do {
        letra = prompt("Ingrese una letra: ");
        while (!((letra >= 'A' && letra <= 'Z') || (letra >= 'a' && letra <= 'z'))) {
            letra = prompt("Eso no es una letra, ingrese una letra: ");
        }
        numero = parseInt(prompt("Ingrese un numero entre -100 y 100: "));
        while (numero < -100 || numero > 100 || isNaN(numero)) {
            numero = parseInt(prompt("numero invalido, ingrese un numero: "));
        }
        if (numero % 2 == 0) {
            contadorPares++;
        } else {
            contadorImpares++;
        }
        if (numero > 0) {
            acumuladorPositivos = acumuladorPositivos + numero;
            contador++;
        } else if (numero < 0) {
            acumuladorNegativos = acumuladorNegativos + numero;
        } else {
            contadorCeros++;
        }
        if (numero > mayor || flag == 0) {
            mayor = numero;
            letraMayor = letra;
        }
        if (numero < menor || flag == 0) {
            menor = numero;
            letraMenor = letra;
            flag = 1;
        }


        seguir = prompt("Desea continuar?: ");
    } while (seguir == 's');

    promedioPos = acumuladorPositivos / contador;

    document.write("la cantidad de numeros pares es: " + contadorPares + "</br>");
    document.write("la cantidad de nueros impares es: " + contadorImpares + "</br>");
    document.write("la cantidad de ceros es: " + contadorCeros + "</br>");
    document.write("el promedio de todos los numeros positivos es: " + promedioPos + "</br>");
    document.write("la suma de todos los numeros negativos es: " + acumuladorNegativos + "</br>");
    document.write("numero maximo: " + mayor + "letra: " + letraMayor + "</br>");
    document.write("numero minimo: " + menor + "letra: " + letraMenor + "</br>");

}
