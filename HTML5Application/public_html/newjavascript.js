/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var numeroUno = 0;
var numeroDos = 0;
var operaciones = "";
function cogerNumero(numerico) {
    cadena = document.getElementById("resultado").value + numerico;
    if (document.getElementById("resultado").value == 0) {
        cadena = numerico;
    }
    // alert(cadena);
    document.getElementById("resultado").value = cadena;
}
function cogerOperacion(operacion) {
    if (operaciones == "") {
        numeroUno = document.getElementById("resultado").value;
        document.getElementById("resultado").value = '0';
        operaciones = operacion;

    } else {
        alert("ya as elegido una operacion");
    }

}
function igualacion() {
    numeroDos = document.getElementById("resultado").value;
    var resul = 0;
    switch (operaciones) {

        case "+":
            resul = parseFloat(numeroUno) + parseFloat(numeroDos);
            break;
        case "-":
            resul = parseFloat(numeroUno) - parseFloat(numeroDos);
            break;
        case "x":
            resul = parseFloat(numeroUno) * parseFloat(numeroDos);
            break;
        case "%":
            resul = parseFloat(numeroUno) / parseFloat(numeroDos);
            break;
    }
    numeroUno = 0;
    numeroDos = 0;
    operaciones = "";
    document.getElementById("resultado").value = resul;
}
function reset() {
    numeroUno = 0;
    numeroDos = 0;
    operaciones = "";
    document.getElementById("resultado").value = '0';
}
function esEntero() {
    numero = parseFloat(document.getElementById("resultado").value);
    if (numero % 1 == 0) {
        // alert ("Es un numero entero");
       longitud =document.getElementById("resultado").value.length;
        if (document.getElementById("resultado").value[longitud-1]!=".") {
            cadena = document.getElementById("resultado").value + '.';
            document.getElementById("resultado").value = cadena;
        }
    } else {
        alert("Es un numero decimal");

    }
}