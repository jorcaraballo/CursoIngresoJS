/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreIngresado;
	var edadIngresada;
	//entrada
	nombreIngresado=txtIdNombre.value;

	edadIngresada=txtIdEdad.value;

	/*
	otras opciones de entrada
	edadIngresada=33;
	edadIngresada=document.getElementById(txtIdEdad).value;
	nombreIngresado=prompt("ingrese su nombre");
	*/

	//salida
	alert("Usted se llama "+nombreIngresado+" y tiene "+edadIngresada+" años");
	/*
	otras salidas
	alert("Usted se llama "+nombreIngresado);
	alert("y tiene "+ edadIngresada+ " años");
	txtIdEdad.value="texto";
	txtIdEdad.value=33
	txtIdEdad.value=edadIngresada;
	document.getElementById('txtIdEdad').value=edadIngresada
	*/
	
}

