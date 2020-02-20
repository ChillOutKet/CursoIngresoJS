function mostrar() {

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var numero;
	var respuesta = 's';
	do {
		numero = parseInt(prompt("ingrese un numero"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("eso no es un numero. Ingrese un numero: "));
		}
		if (numero >= 0) {
			positivo = positivo + numero;
		}
		else {
			negativo = negativo * numero;
			contador++;
		}


		respuesta = prompt("desea ingresar otro numero?");
	} while (respuesta == 's');

	if (contador == 0) {
		negativo = 0;
	}
	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN