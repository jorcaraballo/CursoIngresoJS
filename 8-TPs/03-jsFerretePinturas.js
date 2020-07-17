/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	//txtIdTemperatura
	var temperaturaFahrenheit;
	var calculoResta;
	var temperaturaCentigrados;

	temperaturaFahrenheit=txtIdTemperatura.value;
	temperaturaFahrenheit=parseInt(temperaturaFahrenheit);

	calculoResta=temperaturaFahrenheit-32;
	temperaturaCentigrados=calculoResta*(5/9);
	//temperaturaCentigrados=parseInt(temperaturaCentigrados);

	alert(temperaturaFahrenheit+" Fahrenheit son "+temperaturaCentigrados+" Centígrados");
}

function CentigradosFahrenheit () 
{
	var temperaturaFahrenheit;
	var calculoMultiplicacion;
	var temperaturaCentigrados;

	temperaturaCentigrados=txtIdTemperatura.value;
	temperaturaCentigrados=parseInt(temperaturaCentigrados);

	calculoMultiplicacion=temperaturaCentigrados*(9/5);
	temperaturaFahrenheit=calculoMultiplicacion+32;
	//temperaturaCentigrados=parseInt(temperaturaCentigrados);

	alert(temperaturaCentigrados+" Centígrados son "+temperaturaFahrenheit+" Fahrenheit");
}
