var subirObajar = prompt("Subes o bajas?");
const primerPiso = 2;
var pisoActual = 1;
const ultimoPiso = 20;

if (subirObajar == "subo"){
	var pisoSeleccionado = prompt("A que piso quieres ir?");
	for(pisoActual; pisoActual <= ultimoPiso; pisoActual++){
		console.log("Estas en el piso" + pisoActual)
	if (pisoActual == pisoSeleccionado) {
 		alert("Llegaste");
 	}	
}
}

if (subirObajar == "bajo"){
	var pisoSeleccionado = prompt("A que piso quieres ir?");
	const primerPiso = 1;
	for(var pisoActual = 20; pisoActual >= primerPiso; pisoActual--){
		console.log("Estas en el piso" + pisoActual)
	if  (pisoActual == pisoSeleccionado) {
 		alert("Llegaste");
 	}	
}
}