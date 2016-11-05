

$('#cabecera-principal').css({
   backgroundColor: '#def',
   fontSize: 9,
   color: '#456',
   overflow: 'hidden'
})


$('#cabecera-principal').height(0).animate({
   height: 80,
   fontSize: 13
},1000)



if( $(window).width() < 768 ) {

   $('#boton-menu').click(function(){

      // si el menú no tiene la clase "expandido"
      if( $('#menu-grande').hasClass('expandido') == false ) {

         $("#menu-grande").removeClass('hidden-xs hidden-sm');
         // $("#cabecera-principal").height('auto');
         $("#cabecera-principal").animate({
            height: $(window).height()
         }, 500 );


         $('#boton-menu').html( 'Cerrar Menú' );

         $('#menu-grande').addClass( 'expandido' );

      } else {

         $("#menu-grande").addClass('hidden-xs hidden-sm');
         // $("#cabecera-principal").height('auto');
         $("#cabecera-principal").animate({
            height: 80
         }, 500 );


         $('#boton-menu').html( 'Menú' );

         $('#menu-grande').removeClass( 'expandido' );

      }

   });

}
