let nombreUsuario = prompt("¿cual es tu nombre?");
let edadUsuario = parseInt(prompt("¿cual en su edad?"));
let esEstudiante = prompt("¿eres estudiante? (si/no)").toLowerCase() === "si";

let mensaje = `Hola, ${nombreUsuario}`;
mensaje += `Tienes, ${edadUsuario}`;

if (edadUsuario >= 18) {mensaje += "eres mayor de edad."} else {mensaje += "eres menor de edad"};

if (esEstudiante) {mensaje += "tienes derecho a descuento por ser estudiante."};

console.log(mensaje);