/*
Caraballo Jorge
Al ingresar una edad debemos informar solo 
si la persona es mayor de edad
*/

function mostrar()
{
	//txtIdEdad  
	var edadIngresada;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>17)
	{
		alert("Es mayor de edad");
	} // fin del if(edadIngresada=15)
	

}//FIN DE LA FUNCIÓN