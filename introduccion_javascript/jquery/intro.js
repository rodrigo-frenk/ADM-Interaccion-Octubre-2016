$(document).ready(function(){

   // seleccionar un elemento
   $('body')

   // almacenarlo en una variable
   var body = $('body');

   // añadir estilos
   body.css({
      backgroundColor: "#0bc1ed",
      color: "#ffffff"
   })



   // seleccionar otro elemento
   var titular = $("h1")

   // cambiar contenido
   titular.html( "es un nuevo" );
   titular.append( " texto" );
   titular.prepend( "Este " );


   titular.mouseenter(function(){
      titular.css({ color: "yellow" })
   })

   titular.mouseleave(function(){
      titular.css({ color: "white" })
   })


   // lo mismo con la funcion hover
   // ésta requiere funciones para entrada y salida del mouse

   titular.hover(function(){
      titular.css({ color: "orange" })
   },function(){
      titular.css({ color: "white" })
   })

   var numeroClicks = 0;

   titular.click( function() {

      numeroClicks++;

      titular.html(
         "Has hecho click "
         + numeroClicks +
         " veces."
      )

   })


   $(window).scroll(function(){

      // obtener cantidad de scroll
      var winScroll = $(window).scrollTop();

      // sumar media pantalla
      winScroll += $(window).height() / 2;


      // detener animaciones que haya tenido antes de la nueva
      titular.stop().animate({
         // animar margen superior
         marginTop: winScroll,
         // asignando tamaño al azar entre 10 y 30
         fontSize: 10 + Math.random() * 20

      // duración de la animación: 1 segundo
      }, 1000 )

   })





// botones:

for (var i = 0; i < 6; i++) {

   var nuevoBoton = $("#botones .button").first().clone();

   $( "#botones" ).append( nuevoBoton );



}

// se seleccionan todos los botones:
var todos_los_botones = $("#botones .button");

//alert( todos_los_botones.length );

todos_los_botones.each(function(){

   unBoton = $(this);

   var centrar = (unBoton.height() - unBoton.children().first().height())/2

   unBoton.css({
      paddingTop: centrar
   })

})


todos_los_botones.html( 0 )

todos_los_botones.click( function() {

   todos_los_botones.removeClass( "activo" );

   // seleccionar el boton @ue clicamos
   $(this).addClass( "activo" );

   // opcional, quita la clase activo a los hermanos
   $(this).siblings().removeClass( "activo" );


   var numero = $(this).html();
   numero++;
   $(this).html(numero)

   console.log("clickaste un boton");

})




console.log("jQuery listo");

})
