/*
Al ingresar una edad menor a 18 años y 
un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 
'Es muy pequeño para NO ser soltero.'
*/

function mostrar()
{
//txtIdEdad y estadoCivil
	var edadIngresada;
	var estadoCivilIngresado;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	estadoCivilIngresado=estadoCivil.value;

	if (edadIngresada<18)
	{
		if(estadoCivilIngresado!="Soltero")
		{
			alert("Es muy pequeño para NO ser soltero.");
		}
	}

}//FIN DE LA FUNCIÓN