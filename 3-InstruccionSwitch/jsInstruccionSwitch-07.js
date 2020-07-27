/*
Al selecionar un destino , indicar el punto cardinal de nuestro pais
en donde se encuentra Norte, Sur, Este u Oeste
Caraballo Jorge*/

function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	//alert(destinoIngresado);

	switch(destinoIngresado)
	{
		case "Bariloche":
		alert("Se encuentra en el oeste.");
		break;

		case "Cataratas":
		alert("Se encuentra en el norte.");
		break;

		case "Mar del plata":
		alert("Se encuentra en el Este.");
		break;

		case "Ushuaia":
		alert("Se encuentra en el Sur.");
		break;		
	}

}//FIN DE LA FUNCIÓN