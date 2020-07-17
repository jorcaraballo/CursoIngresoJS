/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	//txtIdSueldo
	//txtIdResultado
	var importeIngresado;
	var aumento;
	var impoteConAumento;


	importeIngresado=txtIdSueldo.value;
	importeIngresado=parseInt(importeIngresado);

	aumento=importeIngresado*10/100;

	impoteConAumento=importeIngresado+aumento;

	txtIdResultado.value=impoteConAumento;

	//alert ("RESULTADO "+resultado);	

}
