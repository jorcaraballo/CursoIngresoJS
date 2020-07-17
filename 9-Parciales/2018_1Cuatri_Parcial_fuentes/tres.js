function mostrar()
{
	//elPrecioFinal
	var valorPrecio;
	var valorPorcentaje;
	var porcentaje;
	var precioFinal;

	valorPrecio=prompt("Por favor ingrese el valor del precio","PRECIO");
	valorPrecio=parseInt(valorPrecio);
	
	valorPorcentaje=prompt("Por favor ingrese el valor del porcentaje","PORCENTAJE");
	valorPorcentaje=parseInt(valorPorcentaje);

	porcentaje=valorPorcentaje/100;
	
	precioFinal=(valorPrecio*porcentaje);

	(elPrecioFinal).value=valorPrecio+precioFinal;

	
}
