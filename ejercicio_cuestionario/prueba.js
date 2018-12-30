/*
 Que vamos a programar?

 A) Cuando se cargue la paguina, decirle al navegador que escuche
 la interaccion del usuario de presionar el boton para ser evaluado.
 Luego, prevenir que se envien los datos al servidor (lo que casuaría que
  se recargue la página).
  2) Chequear cual de las opciones selecciono y si selecciono la correcta
  sumarle un punto.
  3) Chequear si el usuario tiene cierta cantidad de puntos. Si es igual o mayor,
  agregar un elemento span que diga "APROBADO" o "DESAPROBADO".
*/

window.onload = function () {
  var boton = document.getElementById("boton")
  boton.addEventListener("click", function () {
    var opcion_correcta = document.getElementById("1A")
    var puntos_acumulados = 0;
    if (opcion_correcta.checked) {    /* 2 formas de sumar
      1)puntos_acumulados= puntos_acumulados+1
      2)puntos_acumulados+=1
      */
      puntos_acumulados = puntos_acumulados + 1
    }
    var aprobado_con_puntos = 1
    if (aprobado_con_puntos === puntos_acumulados) { document.write("aprobado") }
    else { document.write("desaprobado") }
  });

}