/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//txtIdNumeroDividendo
	//txtIdNumeroDivisor
	var numeroDividendo;
	var numeroDivisor;
	var resto;

	numeroDividendo=txtIdNumeroDividendo.value;//pide el dato
	numeroDividendo=parseInt(numeroDividendo);//transforma el dato

	numeroDivisor=txtIdNumeroDivisor.value;//pide el dato
	numeroDivisor=parseInt(numeroDivisor);//transforma el dato

	resto=numeroDividendo%numeroDivisor;//realiza la suma

	alert ("El Resto es "+resto);	
}