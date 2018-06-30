var operacion = prompt("Que operacion deseas usar?")

if (operacion == "volumen de un cilindro") {
	var volCilindro = prompt("Cual es el radio del cilindro?");
	var exponente = Math.pow(volCilindro, 2);
	alert("Resultado" + exponente);
}