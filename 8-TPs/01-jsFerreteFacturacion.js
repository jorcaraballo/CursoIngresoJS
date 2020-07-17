/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	//txtIdPrecioUno, txtIdPrecioDos y txtIdPrecioTres
	var precioUno;
	var precioDos;
	var precioTres;
	var resultadoSuma

	precioUno=txtIdPrecioUno.value;
	precioUno=parseInt(precioUno);

	precioDos=txtIdPrecioDos.value;
	precioDos=parseInt(precioDos);

	precioTres=txtIdPrecioTres.value;
	precioTres=parseInt(precioTres);

	resultadoSuma=precioUno+precioDos+precioTres;

	alert("El valor total de la suma es "+resultadoSuma);

}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultadoPromedio

	precioUno=txtIdPrecioUno.value;
	precioUno=parseInt(precioUno);

	precioDos=txtIdPrecioDos.value;
	precioDos=parseInt(precioDos);

	precioTres=txtIdPrecioTres.value;
	precioTres=parseInt(precioTres);

	resultadoPromedio=(precioUno+precioDos+precioTres)/3;

	alert("El promedio de los tres precios es "+resultadoPromedio);

}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultadoSuma;
	var ivaDePrecios;
	var resultadoConIva;


	precioUno=txtIdPrecioUno.value;
	precioUno=parseInt(precioUno);

	precioDos=txtIdPrecioDos.value;
	precioDos=parseInt(precioDos);

	precioTres=txtIdPrecioTres.value;
	precioTres=parseInt(precioTres);

	resultadoSuma=precioUno+precioDos+precioTres;

	ivaDePrecios=resultadoSuma*21/100;
//	ivaDePrecios=parseInt(ivaDePrecios);

	resultadoConIva=resultadoSuma+ivaDePrecios;

	alert("El promedio de los tres precios es "+resultadoConIva);

}