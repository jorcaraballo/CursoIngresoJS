function mostrar()
{
  	var nombreUno;
  	var nombreDos;
  	var pesoUno;
  	var pesoDos;
  	var sumaDePesos;
  	var promedioDePesos;

  	nombreUno=prompt("Por favor ingrese el nombre de la primer persona");
  	pesoUno=prompt("Por favor ingrese el peso de la primer persona");
  	pesoUno=parseInt(pesoUno);

  	nombreDos=prompt("Por favor ingrese el nombre de la segunda persona");
  	pesoDos=prompt("Por favor ingrese el peso de la segunda persona");
  	pesoDos=parseInt(pesoDos);

  	sumaDePesos=pesoUno+pesoDos;

  	promedioDePesos=sumaDePesos/2;

    alert("Ustedes se llaman "+nombreUno+" y "+nombreDos+" pesan "+pesoUno+" y "+pesoDos+" kilos, que sumados son "+sumaDePesos+" kilos y el promedio de peso "+promedioDePesos);
}
