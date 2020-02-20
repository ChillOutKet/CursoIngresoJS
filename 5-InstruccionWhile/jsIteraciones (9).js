function mostrar() {

	var flag = 0;
	// declarar variables
	var maximo;
	var minimo;
	var numero;
	var respuesta;
	do {
		numero = parseInt(prompt("ingrese un numero"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("eso no es un numero. Ingrese un numero: "));
		}
		if (flag == 0 || numero > maximo) {
			maximo = numero;
		}
		if (flag == 0 || numero < minimo) {
			minimo = numero;
			flag = 1;
		}
		respuesta = prompt("desea ingresar otro numero?");
	} while (respuesta == 's');

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;




}//FIN DE LA FUNCIÓN