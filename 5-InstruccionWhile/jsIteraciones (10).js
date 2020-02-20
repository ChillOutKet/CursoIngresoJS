function mostrar() {


	//declarar contadores y variables 
	var numero;
	var acumuladorPositivos = 0;
	var acumuladorNegativos = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioPos = 0;
	var promedioNeg = 0;
	var diferencia;
	var respuesta;
	do {
		numero = parseInt(prompt("ingrese un numero"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("eso no es un numero. Ingrese un numero: "));
		}
		if (numero > 0) {
			acumuladorPositivos = acumuladorPositivos + numero;
			contadorPositivos++;

		} else if (numero < 0) {
			acumuladorNegativos = acumuladorNegativos + numero;
			contadorNegativos++;

		} else {
			contadorCeros++;
		}
		if (numero % 2 == 0) {
			contadorPares++;

		}

		respuesta = prompt("desea ingresar otro numero?");
	} while (respuesta == 's');

	if (contadorPositivos != 0) {
		promedioPos = acumuladorPositivos / contadorPositivos;
	}
	if (contadorNegativos != 0) {
		promedioNeg = acumuladorNegativos / contadorNegativos;
	}
	diferencia = acumuladorPositivos - acumuladorNegativos;


	document.write("1-Suma de los negativos: " + acumuladorNegativos + "</br>");
	document.write("2-Suma de los positivos: " + acumuladorPositivos + "</br>");
	document.write("3-Cantidad de positivos: " + contadorPositivos + "</br>");
	document.write("4-Cantidad de negativos: " + contadorNegativos + "</br>");
	document.write("5-Cantidad de ceros: " + contadorCeros + "</br>");
	document.write("6-Cantidad de numeros pares: " + contadorPares + "</br>");
	document.write("7-Promedio de positivos: " + promedioPos + "</br>");
	document.write("8-Promedio de negativos: " + promedioNeg + "</br>");
	document.write("9-Diferencia entre positivos y negativos: " + diferencia + "</br>");



}//FIN DE LA FUNCIÓN