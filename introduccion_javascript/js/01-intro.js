
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






console.log( "Introducción a JS: 01" );
