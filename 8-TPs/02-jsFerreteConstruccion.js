/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
//txtIdLargo, txtIdAncho y txtIdRadio
	var largoDelTerreno;
	var anchoDelTerreno;
	var largoTotal;
	var anchoTotal;
	var perimetroDelTerreno;
	var cantidadDeAlambre;

	largoDelTerreno=txtIdLargo.value;
	largoDelTerreno=parseInt(largoDelTerreno);

	anchoDelTerreno=txtIdAncho.value;
	anchoDelTerreno=parseInt(anchoDelTerreno);

	largoTotal=largoDelTerreno*2;
	anchoTotal=anchoDelTerreno*2;

	perimetroDelTerreno=largoTotal+anchoTotal;

	cantidadDeAlambre=perimetroDelTerreno*3;

	alert("La cantidad de alambre necesario es "+cantidadDeAlambre);

}
function Circulo () 
{
	var radioDelTerreno;
	var perimetroDelTerreno;
	var cantidadDeAlambre;

	radioDelTerreno=txtIdRadio.value;
	radioDelTerreno=parseInt(radioDelTerreno);

	perimetroDelTerreno=2*3.14*radioDelTerreno;
	perimetroDelTerreno=parseInt(perimetroDelTerreno);

	cantidadDeAlambre=erimetroDelTerreno*3;

	alert("La cantidad de alambre necesario es "+cantidadDeAlambre);

}
function Materiales () 
{
	var largoDelTerreno;
	var anchoDelTerreno;
	var superficieDelTerreno;
	var bolsasDeCemento;
	var bolsasDeCal

	largoDelTerreno=txtIdLargo.value;
	largoDelTerreno=parseInt(largoDelTerreno);

	anchoDelTerreno=txtIdAncho.value;
	anchoDelTerreno=parseInt(anchoDelTerreno);


	superficieDelTerreno=largoDelTerreno*anchoDelTerreno;

	bolsasDeCemento=superficieDelTerreno*2;
	
	bolsasDeCal=superficieDelTerreno*3;

	alert("Para hacer el contrapiso se necesitan "+bolsasDeCemento+" bolsas de cemento y "+bolsasDeCal+" bolsas de cal");


}