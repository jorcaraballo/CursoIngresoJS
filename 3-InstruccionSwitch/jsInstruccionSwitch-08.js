/*
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
Caraballo Jorge*/

function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	//alert(destinoIngresado);
	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
		alert("Hace FRIO.")
		break;

		case "Cataratas":
		case "Mar del plata":
		alert("Hace CALOR.")
		break;
	}
}//FIN DE LA FUNCIÓN