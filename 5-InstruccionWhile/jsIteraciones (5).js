function mostrar()
{

var sexo = prompt("ingrese f ó m .").toLowerCase();
while(sexo !='f' && sexo !='m') {
    sexo=prompt("error, ingrese f ó m .").toLowerCase();

}



document.getElementById("Sexo").value=sexo;

}//FIN DE LA FUNCIÓN