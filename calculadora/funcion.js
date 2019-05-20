//Declaramos variables
var operandoa;
var operandob;
var operacion;
var res;
var uno = 1;
var cien = 100;



function agregarNumero(valor, cantidadEnPantalla) {
    if (valor.value == null | valor.value == 0) {
        valor.value = cantidadEnPantalla;
    } else {
        valor.value += cantidadEnPantalla
    }
}

function calcular(form) {


    form.resol.value = eval(document.getElementById('respuesta').value);

    //alert(form.resol.value)


}




function calcu() {

    cor = (document.getElementById('respuesta').value);

    var cadena1 = cor;
    var cadena2 = cadena1.slice(-100, 23);
    //alert(cadena2)
    resol.value = uno / cadena2;


}

function porcentajes() {
    cor = (document.getElementById('respuesta').value);


    resol.value = cor / cien


}

function raizes() {
    raiz = (document.getElementById('respuesta').value);
    resol.value = Math.sqrt(raiz);

}


function limpiar() {
    res = document.getElementById('respuesta');
    reso = document.getElementById('resol');

    res.value = "0";
    reso.value = "";

}

function eliminarNumero(valor) {
    valor.value = valor.value.substring(0, valor.value.length - 1);
}

function masMenos() {
    masm = (document.getElementById('respuesta').value);
    if (masm > 0) {
        cambio = (document.getElementById('respuesta').value = "-" + masm + "");
        resol.value = cambio;

    } else {
        cambio2 = masm.replace(/[-|(|)]/g, "");
        document.getElementById('respuesta').value = cambio2;
        resol.value = cambio2;
    }
}