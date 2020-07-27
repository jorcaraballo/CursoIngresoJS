/*
Al ingresar una edad solo debemos 
informar si la persona NO es adolescente
Caraballo Jorge*/

function mostrar()
{
	//txtIdEdad  
	var edadIngresada;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

		if(edadIngresada>17 || edadIngresada<13)
	{
		alert("Usted NO es adolecente");
	}
	

}//FIN DE LA FUNCIÓN

/*
		if(edadIngresada>18 || (edadIngresada<13)
	{
		alert("Usted NO es adolecente");
	}
// otra forma
	if(edadIngresada<18 && edadIngresada>12)
	{
		
	}
	else
	{
		alert("Usted NO es adolecente");
	}
	*/
