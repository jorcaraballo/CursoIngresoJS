/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//txtIdNumeroUno
	//txtIdNumeroDos
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=txtIdNumeroUno.value;//pide el dato
	numeroUno=parseInt(numeroUno);//transforma el dato

	numeroDos=txtIdNumeroDos.value;//pide el dato
	numeroDos=parseInt(numeroDos);//transforma el dato

	resultado=numeroUno+numeroDos;//realiza la suma

	alert ("El resultado es "+resultado);

	/*Pruebas de paseInt
	var dato

	dato=ParseInt=(3);//ok
	dato=ParseInt=("z999");//NaN
	dato=ParseInt=("");//NaN
	dato=ParseInt=("666z");//solo666
	dato=ParseInt=("66z7");//solo66
	dato=ParseInt=("zz");//NaN
	dato=ParseInt=("3");//3
	dato=ParseInt=(lalala);//error
	*/
}

