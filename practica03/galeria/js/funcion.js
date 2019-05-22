lista = [{ "id": 1, "imagen": "images/img1.jpg" },
    { "id": 2, "imagen": "images/img2.jpg" },
    { "id": 3, "imagen": "images/img3.jpg" },
    { "id": 4, "imagen": "images/img5.jpg" },
    { "id": 5, "imagen": "images/img6.jpg" },
    { "id": 6, "imagen": "images/img7.jpg" },
    { "id": 7, "imagen": "images/img8.jpg" },
    { "id": 8, "imagen": "images/img9.jpg" },
    { "id": 9, "imagen": "images/img10.jpg" },
    { "id": 10, "imagen": "images/img11.jpg" }
];
imagenes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var posActual = 0;

function inicio() {
    for (i = 0; i < 5; i++) {

        imagenes[i] = Math.floor(Math.random() * (10));


    }
    posActual = 0;

    verificar();
    imprimir();
}

//creo una función que muestre la imagen en una section ya creada en el archivo html,
function imprimir() {
    console.log(imagenes);
    //creo codigo html como texto tomando el valor de la lista.
    var texto = "<img src=" + lista[imagenes[posActual]].imagen + ">";
    //ingresa el codigo HTML al section con id imagen.
    window.document.getElementById("imagen").innerHTML = texto;

}

function verificar() {
    //Verfica si ya se esta en la ultima imagen para deshabilitar el boton siguiente
    if (posActual == 4) {
        window.document.getElementById("siguiente").disabled = true;
        window.document.getElementById("anterior").disabled = false;

    }
    //conpruebo si se está mostrando la primera imagen par deshabilitar el boton anterior
    else if (posActual == 0) {
        window.document.getElementById("anterior").disabled = true;
        window.document.getElementById("siguiente").disabled = false;

    } else {
        window.document.getElementById("siguiente").disabled = false;
        window.document.getElementById("anterior").disabled = false;


    }
}

function anterior() {
    posActual--;
    verificar();
    imprimir();

}

function siguiente() {

    posActual++;
    verificar();
    imprimir();


}