function mostrar()
{

	var contador=0;
	var acumulador=0;
	var num;
	var promedio;
	while (contador<5) {
		num=parseInt(prompt("ingrese un número"));
		while(isNaN(num)){
			num=parseInt(prompt("eso no es un número"));
		}
		acumulador=acumulador+num;
		contador++;
	}
	promedio=acumulador/5;


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN