
// comentario simple

/*
comentario
multilínea
*/




// Variables:

var nombreDeVariable;

var otraVariable;

var resultado;

nombreDeVariable = 10;

otraVariable = 20;

resultado = nombreDeVariable + otraVariable;

console.log( "resultado:", resultado );



// Tipo de Datos Flexible en variables de JS

var cualquierCosa;

cualquierCosa = 33;

console.log("cualquierCosa", cualquierCosa);

cualquierCosa = false;

console.log("cualquierCosa", cualquierCosa);

cualquierCosa = "Un texto";

console.log("cualquierCosa", cualquierCosa);

cualquierCosa = [1,3,5];

console.log("cualquierCosa", cualquierCosa);

cualquierCosa = function() { alert(123); };

console.log("cualquierCosa", cualquierCosa);







// Estructuras de Control:

var edadDePersona = 17;

// revisaremos una condición
if( edadDePersona < 18 ) {
   // si se cumple, ejecutamos esto:
   console.log( "No puede entrar");
} else {
   // si no, ejecutamos esto:
   console.log( "Sí puede entrar");
}
if( edadDePersona >= 18 ) {
   // si se cumple, ejecutamos esto:
   console.log( "Sí puede entrar");
} else {
   // si no, ejecutamos esto:
   console.log( "No puede entrar");
}



/*
Operadores de comparación

<     menor que
>     mayor que
<=    menor o igual que
>=    mayor o igual que
==    igual que
!=    difente que
===   idéntico que
!==   no idéntico
!     no

*/

var edad = 33;

if( edad < 18 ) {
   console.log("es menor de edad");
}

if( edad >= 18 && edad < 65 ) {
   console.log("está en edad productiva");
}

if( edad >= 65 ) {
   console.log("está en jubilación");
}


/*

OPERADORES LÓGICOS

&& : and - revisa si se cumplen 2 condiciones
|| : or - revisa si se cumple alguna de las condiciones

*/


/* ejemplo con festival */

pagoBoleto = true;
pulseraEspecial = false;


if( pagoBoleto && pulseraEspecial ) {
   console.log("acceso a backstage");
}

contestoBienEncuesta = false;
tieneAmigosAdentro = true;

if( contestoBienEncuesta || tieneAmigosAdentro ) {
   console.log("Puede entrar gratis");
}


seMetioSinPagar = true;
rompioLasReglas = true;

if( seMetioSinPagar || rompioLasReglas ) {
   console.log("va para afuera");
}

if( seMetioSinPagar && rompioLasReglas ) {
   console.log("remitir a las autoridades");
}



// persona 1
pagoBoleto = true;
tienePulsera = true;
esMiembroBanda = false;


// persona 2
pagoBoleto = true;
tienePulsera = false;
esMiembroBanda = false;


// persona 2
pagoBoleto = false;
tienePulsera = false;
esMiembroBanda = true;


if( ( pagoBoleto && tienePulsera ) || esMiembroBanda ) {
   console.log('acceso backstage');
}







// day es un número entre el 0 y el 6
var day = new Date().getDay();
var weekday;

switch ( day ) {
   case 0:
   weekday = "Domingo";
   break;
   case 1:
   weekday = "Lunes";
   break;
   case 2:
   weekday = "Martes";
   break;
   case 3:
   weekday = "Miércoles";
   break;
   case 4:
   weekday = "Jueves";
   break;
   case 5:
   weekday = "Viernes";
   break;
   case 6:
   weekday = "Sábado";
}


console.log("El día de la semana es:", weekday );





// BUCLES o "LOOPS"

// iterar por una serie de números:

for (var i = 0; i <= 10; i++) {

   console.log("siguiente número:", i);

}

// Ejecutar más código adentro de un for,
// en este caso, revisar la edad
for (var i = 0; i <= 33; i++) {

   switch(i) {
      case 21:
         console.log('Tiene la edad de Justin Bieber');
      break;
      case 27:
         console.log('Tiene la edad de JimiHendrix');
      break;
      case 33:
         console.log('Tiene la edad de Cristo');
      break;
   }


}






// While: bucle que se repite mientras se cumpla una condicion
/*
while( condicion ) {
   // hacer algo
}
*/


var totalSumado = 0;

while ( totalSumado < 100 ) {
   // sumarle un número al azar entre 0 y 30
   totalSumado = totalSumado + ( Math.random() * 30 );

   console.log("el total es: ", totalSumado );

}











console.log( "Introducción a JS: 01" );
