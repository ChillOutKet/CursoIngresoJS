function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;
switch (mes) {
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
    alert("tiene 31 dias");
    break;
    case "Febrero":
    alert("tiene 28 o 29 dias");
    break;
    default:
    alert ("tiene 30 dias");
    break;

}
//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN