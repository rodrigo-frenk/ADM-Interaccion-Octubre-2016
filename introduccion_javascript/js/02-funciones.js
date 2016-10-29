// funciones


console.log( "Intro a JS: Funciones" );




// funciones:

function nombreDeFuncion() {
   // realizar algo
   console.log("Realizar algo!");
}

nombreDeFuncion();


// funcion con parametro (o argumento)

function funcionConEntrada( dato ) {
   console.log( "el dato es:", dato )
}


funcionConEntrada( 178 );

funcionConEntrada( "Texto de prueba" );








function sumarNumeros( a, b ) {
   var resultado = a + b;
   console.log("La suma de los numeros es:", resultado);
}


sumarNumeros( 333, 444 );



/*

nota: Las variables viven en un ámbito (scope),
existen dentro de los archivos o funciones que las declaran

Ejemplo: la variable "resultado" no existe fuera de la función "sumarNumeros"

console.log( "La suma de los números es:", resultado );

*/





// una función puede tener cualquíer número de parámetros:
// function nombreFunc( a,b,c,d,e,f,g,h,i,j,k )





/* FUNCIONES QUE RETORNAN VALORES */


function suma( a, b ) {

   var resultado = a + b;

   return resultado;

}


// podemos almacenar el valor
var unaSuma = suma( 10, 7 );

// y usarlo después cuando queramos:
console.log( "el valor de unaSuma es:", unaSuma );
