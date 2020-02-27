
function mostrar()
{
var ancho;
var largo;
var perimetro;

ancho=parseInt(prompt("Ingrese el ancho"));
while(isNaN(ancho)||ancho<1){
    ancho = parseInt(prompt("Dato invalido, ingrese el ancho"));
 }
largo=parseInt(prompt("Ingrese el largo"));
while(isNaN(largo)||largo<1){
    largo = parseInt(prompt("Dato invalido, ingrese el largo"));
 }
perimetro=ancho*2+largo*2;
alert("El perimetro es "+ perimetro);
}
