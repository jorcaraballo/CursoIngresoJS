function mostrar()
{
	//elPrecioFinal
	var valorPrecio;
	var valorPorcentaje;
	var descuento;
	var valorFinal;

	valorPrecio=prompt("Por favor ingrese el precio","PRECIO");
	valorPrecio=parseInt(valorPrecio);

	valorPorcentaje=prompt("Por favor ingrese el porcentaje del descuento","PORCENTAJE");
	valorPorcentaje=parseInt(valorPorcentaje);

	descuento=valorPrecio*valorPorcentaje/100;

	elPrecioFinal.value=valorPrecio-descuento;

}
