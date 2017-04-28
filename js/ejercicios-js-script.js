function consejos() {

    document.getElementById("trucos1").value = "Utiliza reverse(),join()...";
    document.getElementById("trucos2").value = "Utiliza onclick";
}




/* FIN COMPORTAMIENTO WEB */

/******************************************************************
 *******************************************************************
 *******************************************************************
 *******************************************************************
 */

function copiarInvertir() {

    var corte = document.getElementById("text1").value;
    var resul = corte.split("").reverse().join("");
    document.getElementById("text2").value = resul;

}

function conteo() {
    var cuenta = document.getElementById("text1").value;
    var resul = cuenta.length;
    document.getElementById("text3").value = resul;
    return resul;
}

function analizar() {
    var total = conteo();

    if (total <= 6) {
        document.getElementById("text4").value = "Palabra corta";
    } else if (total == 7) {
        document.getElementById("text4").value = "Palabra normal";
    } else {
        document.getElementById("text4").value = "Palabra larga";
    }
}

/* FIN EJERCICIO 1 */

/******************************************************************
 *******************************************************************
 *******************************************************************
 *******************************************************************
 *******************************************************************
 *******************************************************************
 *******************************************************************
 *******************************************************************
 *******************************************************************
 *******************************************************************
 *******************************************************************
 *******************************************************************
 *******************************************************************
 */

var numRangoMax = 0;
var numRangoMin = 0;
var numMaquina = 0;
var numPer = 0;


function adivinarNumero() {
    numRangoMax = prompt("Elige un rango máximo");
    numRangoMax = parseInt(numRangoMax);
    if (numPer == null) {
        break;
    }
    console.log(numRangoMax);
    numRangoMin = prompt("Elige un rango mínimo");
    numRangoMin = parseInt(numRangoMin);
    if (numPer == null) {
        break;
    }
    console.log(numRangoMin);
    numMaquina = parseInt((Math.random() * numRangoMax) + numRangoMin);
    document.getElementById("text6").value = numMaquina;
    var salida = false;


    do {

        numPer = prompt("Introduce tu número");
        if (numPer == null) {
            break;
        }
        console.log(numPer);

        console.log(numMaquina);
        if (numPer > numMaquina) {
            alert("El número es más pequeño");
            document.getElementById("text5").value = "El número es más pequeño";
        } else if (numPer < numMaquina) {
            alert("El número es más grande");
            document.getElementById("text5").value = "El número es más grande";
        } else {
            alert("Has ganado!");
            salida = true;
        }
    } while (!salida);

}



/* FIN EJERCICIO 3 */

/******************************************************************
 *******************************************************************
 *******************************************************************
 *******************************************************************
 *******************************************************************
 *******************************************************************
 *******************************************************************
 *******************************************************************
 *******************************************************************
 *******************************************************************
 *******************************************************************
 *******************************************************************
 *******************************************************************
 */
