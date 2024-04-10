/* 
1.- Saber cuántos caracteres tiene la frase
    para saber cuantos caracteres tiene la frase, primero debo de saber cual es el tamaño de la frase
    y asi poder consultarlo

    La función phrase.length en JavaScript devuelve la longitud de la cadena de caracteres almacenada en la variable phrase. La longitud se define como el número de caracteres que componen la cadena, incluyendo espacios, letras, números y símbolos.
    En otras palabras, te dice cuántos caracteres hay en la frase.

------------

2.- Saber cuántas letras tiene la frase
    para saber cuantas letras tiene la frase, debo de revisar toda la frase, y desde la posicion uno, el inicio de la frase, verificar que tipo de caracter existe ahi, asi consecutivamente is es una letra agregarlo y ir teniendo esto en cuenta para poder saber que
    tipo de caracteres existen en cada una de las posiciones despues de ello, remplazarlo este y eliminar el espacio para ahora tener una frase sin espacios, despues consultar el numero de letras que contiene esta frase, una vez ya eliminados los espacios y saber el total de letras del mismo

    La función phrase.replace(/ /g, '').length en JavaScript se utiliza para obtener la longitud de una cadena después de eliminar todos los espacios en blanco.

    Se divide en dos partes:

    1. phrase.replace(/ /g, ''):
    Esta parte utiliza el método replace() en la cadena phrase.
    El primer argumento, / /g, es una expresión regular que coincide con cualquier caracter de espacio en blanco (espacios, tabulaciones, saltos de línea, etc.) representado por el espacio entre las barras diagonales.
    La bandera g indica una búsqueda global, lo que significa que reemplazará todas las apariciones de espacios en blanco en la cadena, no solo la primera.
    El segundo argumento, una cadena vacía '', reemplaza cada caracter de espacio en blanco coincidente con nada, eliminándolos efectivamente.
    En resumen, esta parte crea una nueva cadena donde se han eliminado todos los espacios de la phrase original.

    2. .length:
    Esta parte se aplica al resultado del método replace, que es la cadena sin espacios.
    La propiedad length es una propiedad incorporada de las cadenas en JavaScript.
    Devuelve el número de caracteres presentes en la cadena, incluyendo letras, números, símbolos y, en este caso, sin espacios.
    En resumen, la función completa phrase.replace(/ /g, '').length calcula la longitud de la cadena phrase después de eliminar todos los caracteres de espacio en blanco.

--------------    

3.- Saber cuántas palabras tiene la frase
    Para saber cuantas palabras tiene la frase, es buscar una forma en la que pueda hacer un borrado de espacios entre ellas y el resultado poder consultarlo en una forma que me de un valor, por ser una frase que contiene palabras de distintas medidas, seria buscar la forma de poder juntarlas en un lista de palabras para poder consultar el valor del tamaño de lista, de cuantos elementos existne en ella y asi poder dar un resultado

    La función console.log(phrase.split(' ').length) en JavaScript se utiliza para imprimir en la consola la longitud de una cadena después de dividirla en una array por cada espacio en blanco.

    Se divide en dos partes:

    1. phrase.split(' '):
    Esta parte utiliza el método split() en la cadena phrase.
    El argumento ' ' es un separador que indica que la cadena se debe dividir en cada espacio en blanco.
    El método split() devuelve una array que contiene cada palabra de la cadena original como un elemento individual.
    
    2. .length:
    Esta parte se aplica a la array resultante del método split.
    La propiedad length es una propiedad incorporada de las arrays en JavaScript.
    Devuelve el número de elementos presentes en la array.
    En resumen, la función completa console.log(phrase.split(' ').length) imprime en la consola la cantidad de palabras que hay en la cadena phrase.

4.- Obtener la misma frase pero en mayúsculas

    Para poder convertir la misma frase pero en mayusculas seria consultar el contenido de la frase y ver si este puede cambiar
    directamente ya que simplemente son caracteres ordenados y consultarlos o cambiar la forma del caracter seria la forma de encontrar
    una solucion al mismo

    La función phrase.toUpperCase() en JavaScript se utiliza para imprimir en la consola la cadena almacenada en la variable phrase, pero con todas las letras en mayúscula.

   phrase.toUpperCase():

    Se asume que phrase es una variable que contiene una cadena de texto.
    Se llama al método .toUpperCase() sobre la cadena phrase.
    Este método convierte todas las letras minúsculas de la cadena en letras mayúsculas.
    Es importante destacar que no modifica la variable phrase original, sino que crea una nueva cadena con las letras en mayúscula.
    En resumen, la función phrase.toUpperCase() imprime en la consola la versión en mayúsculas de la cadena almacenada en la variable phrase


5.- Obtener la misma frase pero con todas las letras "a" reemplazadas por un "4"

    Para organizar este programa primero debemos de organiar el sentido y igual analizar la frase primero e ir posicion por posicion
    desde el iniciop validando que el primer elemento sea o no una letra 4 en dado caso si la letra es  "a", lo reemplaza por un 
    numero 4, consecutivamente es ir cambiando de posicion e verificar si la siguiente posicion es o no  una letra "a", 
    en dado caso si lo sea, sustuirla por un 4, asi hasta terminar la frase por completo.
*/

const phrase = "La mejor forma de predecir el futuro es creándolo"

console.log(phrase.length) // Cuantos caracteres tiene la frase
console.log(phrase.replace(/ /g, '').length)// Cuantas letras tiene la frase (quitando los espacios
console.log(phrase.split(' ').length) //Cuantas palabras tiene la frase
console.log(phrase.toUpperCase()) // La misma frase pero en Mayusculas
console.log(phrase.replace(/[A]/g,'4')) // La misma frase pero todos los "a" son reemplazados por un "4"

