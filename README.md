

(https://github.com/KellyReyes/Practica03-Javascript/blob/master/practica03/evidencia/1.png)
Archivo Htlm:

Para la creación de la parte grafica de la calculadora creamos un archivo html: 
 

(https://github.com/KellyReyes/Practica03-Javascript/blob/master/practica03/evidencia/2.png)

En este archivo importamos nuestro archivo js el cual va a tener las funciones que nos permite realizar los diversos cálculos , creamos dos span los cuales van a contener la respuesta y además se crean unos botones tipo button para los números y para los símbolos de las operaciones.

En el archivo css.

 En al archivo css vamos a darle el formato que nosotros queremos en este caso creamos clases en el que les domos un tamaño ,color, borde un fondo .

 
(https://github.com/KellyReyes/Practica03-Javascript/blob/master/practica03/evidencia/3.png)


Archivo js:

 Esta función  obtiene el valor ingresado en la caja de texto  y resuelve,suma,resta,multipliacion y division gracias al eval y la respuestase imprime en la caja de texto (form.resol.value)
  
 
(https://github.com/KellyReyes/Practica03-Javascript/blob/master/practica03/evidencia/4.png)

Esta función realiza 1/x, obtenemos lo ingresado en la variable respuesta y la guardamos en una variable a la cual le valos a proceder a cortarla la (x), mandamos a imprimir  en resol la división  de uno para la cadena cortada la x.
En esta función vamos a obtener el porcentaje  para lo cual obtenemos lo que contiene respuesta y luego esa respuesta mandamos a imprimir en resol la respuesta dividida para 100.
En esta función obtenemos lo ingresado en respuesta  y mandamos a imprimir en resol el numero obtenido por una función propia de js que nos permite obtener la raíz. 
En esta función obtenemos los valores de respuesta y de resol y mandamos a imprimir en 0 y en vacio.
En esta función a recortar en menos uno el valor.
Esta función  obtenemos el valor de respuesta i preguntamos si es mayor a cero si es menos vamos a quitar el menos si no vamos a remplazar el mas por menos.

 


VALIDACIONES.
 


(https://github.com/KellyReyes/Practica03-Javascript/blob/master/practica03/evidencia/5.png)


Esta función  permite sacar cada uno de los elementos que forman parte del formulario y pregunta si cada text se encuentra vacío si este esta vacío manda ah imprimir en el span creado en el archivo html un mensaje par que este campo sea llenado además que manda un style color rojo al borde de cada elemento.
 
 
(https://github.com/KellyReyes/Practica03-Javascript/blob/master/practica03/evidencia/6.png)

Esta función es la que valida la cedula por el ultimo digito, si la cedula ingresada es la correcta el span se mostrara vacío y se pintara el elemento de color negro el borde, pero si la cedula que se ingresa es incorrecta  ya sea que no sea una cedula validada  o el tamaño de esta no sea el correcto igual a 10  se manda un mensaje en el span diciendo que ingrese una cedula valida además el borde del elemento se pintara de color rojo para indicar que existe un error .

(https://github.com/KellyReyes/Practica03-Javascript/blob/master/practica03/evidencia/7.png)

Esta función nos permite que lo que se ingrese sea solo letras  por lo que captura la entrada del teclado  luego se le asigna a una variable, luego creamos una variable la cual tiene las letras en  mayúsculas y minúsculas y el espacio luego preguntamos si lo ingresado esta en algunas de las variables ingresada
De solo letras o de carácter especial

(https://github.com/KellyReyes/Practica03-Javascript/blob/master/practica03/evidencia/8.png)

Esta función captura la entrada del teclado   y nos retorna solo números y un carácter especial en caso de que sea insertado
Esta función nos valida que solo se pueda ingresar solo dos cadenas de texto  por lo que sacamos el varlor del text  y mandamos a contar los caracter especial espacio y luego preguntamos que si este es igual a dos nos deje ingresar pero si es menor a dos o mayor se nos marque de color rojo y se imprima en el span que debe ingresar solo dos nombres.
Esta función nos valida que solo se pueda ingresar solo dos cadenas de texto  por lo que sacamos el varlor del text  y mandamos a contar los caracter especial espacio y luego preguntamos que si este es igual a dos nos deje ingresar pero si es menor a dos o mayor se nos marque de color rojo y se imprima en el span que debe ingresar solo dos apellidos.
Esta funcion solo nos permite ingresar en formato dd/mm/yyy  mandamos acortar loa 4 primeros caracteres para ver si este contiene – si contiene le mandamos un reverse para cambiar el orden y si no contiene mandamos un mensaje de que debe ingresar con formato dd/mm/yyy.
 

GALERIA


(https://github.com/KellyReyes/Practica03-Javascript/blob/master/practica03/evidencia/9.png)

Creamos un arreglo con las imágenes.

 
(https://github.com/KellyReyes/Practica03-Javascript/blob/master/practica03/evidencia/10.png)

Dentro de esta función hacemos un random para las imágenes y llamamos a las funciones verificar e imprimir.
 

(https://github.com/KellyReyes/Practica03-Javascript/blob/master/practica03/evidencia/11.png)
 


