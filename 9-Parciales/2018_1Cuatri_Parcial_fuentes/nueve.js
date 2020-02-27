function mostrar() {
    var marca;
    var peso;
    var temperatura;
    var contadorTPar = 0;
    var marcaPesada;
    var mayorPeso;
    var contadorMenor0 = 0;
    var acumuladorPeso = 0;
    var contador = 0;
    var menorPeso;
    var seguir;
    var flag = 0;

    do {
        marca = prompt("ingrese marca: ");
        peso = parseInt(prompt("ingrese peso (1-100): "));
        while (peso < 1 || peso > 100 || isNaN(peso)) {
            peso = parseInt(prompt("dato invalido, ingrese peso(1-100): "));
        }
        temperatura = parseInt(prompt("ingrese temperatura entre -30 y 30): "))
        while (temperatura < -30 || temperatura > 30 || isNaN(temperatura)) {
            temperatura = parseInt(prompt("dato invalido, ingrese temperatura entre -30 y 30): "));
        }
        if (temperatura % 2 == 0) {
            contadorTPar++;
        }
        if (peso > mayorPeso || flag == 0) {
            mayorPeso = peso;
            marcaPesada = marca;
        }
        if (peso < menorPeso || flag == 0) {
            menorPeso = peso;

            flag = 1;
        }
        if (temperatura < 0) {
            contadorMenor0++;
        }

        acumuladorPeso = acumuladorPeso + peso;
        contador++;

        seguir = prompt("desea continuar?: ");
    } while (seguir == 's')
    promedioPeso = acumuladorPeso / contador;

    document.write("la cantidad de temperaturas pares es: " + contadorTPar + "</br>");
    document.write("la marca del producto mas pesado es: " + marcaPesada + "</br>");
    document.write("la cantidad de productos que se conservan a menos de 0 grados es: " + contadorMenor0 + "</br>");
    document.write("el promedio del peso de todos los productos es: " + promedioPeso + "</br>");
    document.write("peso maximo: " + mayorPeso + " peso minimo: " + menorPeso + "</br>");

}
