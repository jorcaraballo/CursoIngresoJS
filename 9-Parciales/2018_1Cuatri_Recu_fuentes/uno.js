
function mostrar()
{
	var valorAncho;
	var valorLargo;
	var perimetro;

	valorAncho=prompt("Por favor ingrese el valor del ancho del rectángulo","ANCHO");
	valorAncho=parseInt(valorAncho);

	valorLargo=prompt("Por favor ingrese el valor del largo del rectángulo","LARGO");
	valorLargo=parseInt(valorLargo);

	perimetro=(valorAncho+valorLargo)*2;

	alert("El perímetro del rectángulo es: "+perimetro);
}
