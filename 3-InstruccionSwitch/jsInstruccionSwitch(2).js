function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;
switch (mes) {
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    alert("falta para el invierno");
    break;
    case "Julio":
    case "Agosto":
    alert("abrigate que hace frio");
    break;
    default:
    alert("ya pasamos el frio, ahora calor!");
    break;
}





}//FIN DE LA FUNCIÓN