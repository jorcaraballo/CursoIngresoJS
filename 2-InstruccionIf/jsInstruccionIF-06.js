/*
Al ingresar una edad debemos informar si la 
persona es mayor de edad (mas de 18 años) o 
adolescente (entre 13 y 17 años) o 
niño (menor a 13 años).
Caraballo Jorge
*/

function mostrar()
{
	var edadIngresada;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	if (edadIngresada<13)
	{
		alert("niño");
	}
	else 
	{
		if(edadIngresada<18)
		{
		alert("adolecente");
		}
		else
		{
			alert("mayor de edad");
		}
	}
	
}//FIN DE LA FUNCIÓN