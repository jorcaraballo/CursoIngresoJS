/*
Caraballo Jorge
Pedir por prompt el precio y el porcentaje de descuento, 
mostrar el precio final con descuento por id.*/

function mostrar()
{
	var precio;
	var porcentajeDeDescuento;
	var descuento;
	var	precioConDescuento;

	precio=prompt("Por favor ingrese el precio del producto");
	precio=parseInt(precio);

	porcentajeDeDescuento=prompt("Por favor ingrese el porcentaje del descuento")
	porcentajeDeDescuento=parseInt(porcentajeDeDescuento);

	descuento=precio*porcentajeDeDescuento/100;

	precioConDescuento=precio-descuento;

	elPrecioFinal.value=precioConDescuento;

}