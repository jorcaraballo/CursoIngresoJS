/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;//declaro o asigno

	nombreIngresado=txtIdNombre.value;//cargao o asigno
	
	/* Es lo mismo poner:
	nombreIngresado=document.getElementById("txtIdNombre").value;
 	*/

	alert(nombreIngresado);//mostrar

}


