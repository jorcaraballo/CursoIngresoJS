/*
Caraballo Jorge
Al ingresar una edad debemos informar si la 
persona es mayor de edad, 
sino informar que es un menor de edad.*/

function mostrar()
{
	//txtIdEdad  
	var edadIngresada;
	var valorDeVerdad;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);

	valorDeVerdad=edadIngresada<15
	valorDeVerdad=edadIngresada==15
	valorDeVerdad=edadIngresada>15

	valorDeVerdad=edadIngresada*2;

//ejemplo 
// ingresada

	if(true)
	{
		alert("ingreso");
	}
	if(1)
	{
		alert("ingreso");
	}
	if("true")
	{
		alert("true");
	}
	if("1")
	{
		alert("1");
	}
	if("false")
	{
		alert("false");
	}
	if("0")
	{
		alert("0");
	}
	if("lalalala")
	{
		alert("lalalala");
	}
//no ingresa

	if(false)
	{
		alert("ingreso");
	}
	if(0)
	{
		alert("ingreso");
	}





	if(edadIngresada>17)
	{
		alert("Es mayor de edad");
	}

	else
	{
		alert ("Es menor de edad");
	} // fin del if(edadIngresada>17)

/* 
//uso de procesador de mas
	if(edadIngresada>17)
	{
		alert("Es mayor de edad");
	} // fin del if(edadIngresada=15)

	if(edadIngresada<18)
	{
		alert ("Es menor de edad");
	}// fin del if(edadIngresada<18)*/

}//FIN DE LA FUNCIÓN