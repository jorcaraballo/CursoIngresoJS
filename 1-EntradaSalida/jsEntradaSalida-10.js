/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//txtIdImporte
	//txtIdResultado
	var importe;
	var porcentaje;
	var resultado;

	importe=txtIdImporte.value;
	importe=parseInt(importe);

	porcentaje=importe*25/100;

	resultado=importe-porcentaje;

	txtIdResultado.value=resultado;


}
