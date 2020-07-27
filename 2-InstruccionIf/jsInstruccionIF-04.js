/*
Caraballo Jorge
Al ingresar una edad debemos informar si 
la persona es adolescente, 
edad entre 13 y 17 años (inclusive) .
*/

function mostrar()
{
	//txtIdEdad  
	var edadIngresada;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>12)
	{
		if(edadIngresada<18)
		{
			alert("Usted es adolecente");
		}// fin del if(edadIngresada<18)
	} // fin del if(edadIngresada>12*/


}//FIN DE LA FUNCIÓN

/* con &&
	if(edadIngresada<18 && edadIngresada<12)
	{
		alert("Usted es adolecente");
	}

	if(edadIngresada>12)
	{
		if(edadIngresada<18)
		{
			alert("Usted es adolecente");
		}// fin del if(edadIngresada<18)
	} // fin del if(edadIngresada>12*/