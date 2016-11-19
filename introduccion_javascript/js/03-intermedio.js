
// Arrays o Arreglos

a = [ 0, 2, 4, 6, 8 ];

// declarar el arreglo
frutas = [ "manzana", "pera", "uva", "guanábana", "zarzamora", "piña" ]

// obtener sus elementos usando su índice:
console.log( frutas[ 0 ] );

// cambiar o introducir elementos
frutas[ 2 ] = "pasa";
frutas[ 8 ] = "melón";

// introducir elementos al final
frutas.push( "sandía" );


// retirar el ultimo elemento (nos retorna el ultimo y lo saca del arreglo)
var ultimaFruta = frutas.pop();


// quitar un elemento del arreglo
// aquí, quitamos el 4 elemento, y sólo quitamos uno
frutas.splice( 3, 1 );

// quitar elemento por su valor
frutas.splice ( frutas.indexOf( "pera"), 1 );



// Iteración en arreglos


var nombresClases = [ "Matemáticas", "Español", "Geografía", "Química" ]


for( var i = 0; i < nombresClases.length; i++ ) {

   console.log("El nombre de la clase es", nombresClases[ i ]);

}


// otra manera de iterar

var nombresPaginas = [ "Inicio", "Tienda", "Blog", "Contacto" ];


for( i in nombresPaginas ) {

   console.log( "El siguiente menú es", nombresPaginas[ i ] );

}




// Arreglos con índices distintos

var capitales = [];


capitales[ "México" ] = "Ciudad de México";
capitales[ "Mongolia" ] = "Ulán Bator";
capitales[ "Alemania" ] = "Berlín";

var pais = "Mongolia";

console.log( "La capital de " + pais + " es " + capitales[ pais ] )



for( i in capitales ) {

   console.log( "La capital de", i, "es", capitales[ i ] );

}



// Objetos de Javascript

objeto = {
   propiedad1: "valor1",
   propiedad2: 2,
   propiedad3: ["valor3"],
}

// podemos recuperar el dato almacenado en la propiedad del Objetos
console.log( objeto.propiedad1 )




var persona = {
   nombres: "Miguel Ernesto",
   apellidos: "Garza García",
   edad: 37,
   ocupacion: "abogado",
   hijos: [ // los hijos están almacenados en un arreglo
      {
         nombres: "Miguel Ernesto Jr.",
         apellidos: "Garza Pérez",
         edad: 10,
         ocupacion: "",
         hijos: [

         ]
      },
      {
         nombres: "María",
         apellidos: "Garza Pérez",
         edad: 17,
         ocupacion: "",
         hijos: [

         ]
      }
   ]

}



// retardar acciones

setTimeout( function() {
   alert("acción diferida")
}, 6000)



// repetir acciones
count = 0;

setInterval( function() {
count++;
   console.log("acción repetida", count )
}, 1000)


function revisarVariable( argumento )
// revisar si una variable tiene información:

      // el argumento sí tiene asignado un valor
   if( typeof( argumento ) != "undefined" ) {

   }

}
