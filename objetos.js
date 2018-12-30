// FORMAS DE ASIGNAR METODOS Y PROPIEDADES A UN OBJETO

// ! OBJECT LITERAL
// Declarar directamente propiedades y métodos dentro del objeto
var teresita = {
  nombre: "Teresa",
  actividad_favorita: function actividad_favorita() {
    return "Bajar libros en PDF y leerlos en la tablet"
  }
}
// Declarar un objeto vacio y luego agregar propiedades y métodos

var terista = {};
teresita.nombre = "Teresa"
teresita.actividad_favorita = function actividad_favorita() {
  return "Bajar libros en PDF y leerlos en la tablet"
}


// ! OPERADOR NEW

// Inicio un objeto vacio con la palabra reservada new
var Teresita = new Object();

Teresita.nombre = "Teresa";
Teresita.actividad_favorita: function actividad_favorita() {
  return "Bajar libros en PDF y leerlos en la tablet"
} 
