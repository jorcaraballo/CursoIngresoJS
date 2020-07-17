/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var resultadoSuma;

	numeroUno=txtIdNumeroUno.value;//pide el dato
	numeroUno=parseInt(numeroUno);//transforma el dato

	numeroDos=txtIdNumeroDos.value;//pide el dato
	numeroDos=parseInt(numeroDos);//transforma el dato

	resultadoSuma=numeroUno+numeroDos;//realiza la suma

	alert ("La Suma es "+resultadoSuma);	
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resultadoResta;

	numeroUno=txtIdNumeroUno.value;
	numeroUno=parseInt(numeroUno);//No hace falta en la resta

	numeroDos=txtIdNumeroDos.value;
	numeroDos=parseInt(numeroDos);//No hace falta en la resta

	resultadoResta=numeroUno-numeroDos;

	alert ("La Resta es "+resultadoResta);	
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var resultadoMultiplicar;

	numeroUno=txtIdNumeroUno.value;
	numeroUno=parseInt(numeroUno);//No hace falta en la multiplicacion

	numeroDos=txtIdNumeroDos.value;
	numeroDos=parseInt(numeroDos);//No hace falta en en la multiplicacion

	resultadoMultiplicar=numeroUno*numeroDos;

	alert ("La Multiplicación es "+resultadoMultiplicar);
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var resultadoDividir;

	numeroUno=txtIdNumeroUno.value;
	numeroUno=parseInt(numeroUno);//No hace falta en division

	numeroDos=txtIdNumeroDos.value;
	numeroDos=parseInt(numeroDos);//No hace falta en division

	resultadoDividir=numeroUno/numeroDos;

	alert ("La División es "+resultadoDividir);
}

