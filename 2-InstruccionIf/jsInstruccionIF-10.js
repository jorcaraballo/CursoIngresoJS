/*
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	var numeroGenerado;
	numeroGenerado=Math.floor(Math.random() * 10) + 1;
	//console.log(numeroGenerado);
	if(numeroGenerado<5)
	{
		alert("Vamos, la proxima se puede");
	}
	else
	{
		if(numeroGenerado>8)
		{
			alert("EXCELENTE")
		}
		else
		{
			alert("APROBÓ")
		}
	}

}//FIN DE LA FUNCIÓN