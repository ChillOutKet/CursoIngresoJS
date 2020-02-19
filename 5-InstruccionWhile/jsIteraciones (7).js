function mostrar()
{

	var contador=0;
	var acumulador=0;
	var num;
    var promedio;
	var respuesta;
	do{
		
		num=parseInt(prompt("ingrese un número"));

		while(isNaN(num)){
			num=parseInt(prompt("eso no es un número"));
		}
		acumulador=acumulador+num;
		contador=contador +1;
		respuesta=prompt("continuar ingresando numeros?");
	}while (respuesta=="si");
	
promedio= acumulador/contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN