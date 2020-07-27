/*
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y 
localidad para vacacionar para poder calcular el precio final
*en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba 
tiene un descuento del 10% Mar del plata tiene un descuento del 20%
*en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba 
tiene un aumento del 10% Mar del plata tiene un aumento del 20%
*en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas 
tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
Caraballo Jorge
*/

function mostrar()
{
	//txtIdEstacion txtIdDestino
	var estacionIngresada=txtIdEstacion.value;
	var destinoIngresado=txtIdDestino.value;
	var precioInicial;
	var porcentaje;
	var precioFinal;

	precioInicial=15000;
	//precioInicial=parceInt(precioInicial);

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje=precioInicial*20/100;
				break;

				case "Cordoba":
				case "Cataratas":
					porcentaje=-(precioInicial*10/100);
				break;

				case "Mar del plata":
					porcentaje=-(precioInicial*20/100);
				break;
			}
		break;

		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje=-(precioInicial*20/100);
				break;

				case "Cordoba":
				case "Cataratas":
					porcentaje=precioInicial*10/100;
				break;

				case "Mar del plata":
					porcentaje=precioInicial*20/100;
				break;
			}
		break;

		case "Otoño":
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					porcentaje=precioInicial*10/100;
				break;

				default:
					porcentaje=0;
				break;
			}
		break;
	}

	precioFinal=precioInicial+porcentaje;
	alert("El precio Final es de $ "+precioFinal);
}//FIN DE LA FUNCIÓN