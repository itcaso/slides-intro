
(function($) {
    'use strict';

    $.redirectURL = redirectURL; 

    setTimeout(function(){
		$('body').addClass('loaded');
	}, 3000); //Tiempo que se muestra el loader inicial

	 $('#slide01').carouFredSel({ // Slider superior
	 	infinite: true,
	 	items: 10,
	 	responsive: false,
	 	align: "center",
	 	scroll: {
			items: 1,
			duration: 2500,
			timeoutDuration: 0,
			easing: 'linear'
		}
	 });

	 $('#slide02').carouFredSel({ // Slider inferior
	 	infinite: true,
	 	items: 10,
	 	direction: "right",
	 	responsive: false,
	 	align: "center",
	 	scroll: {
			items: 1,
			duration: 2500,
			timeoutDuration: 0,
			easing: 'linear'
		}
	 });

	 function redirectURL(){
	 	var delay = 10000; //Tiempo en milisegundos
		setTimeout(function(){ window.location = 'http://yahoo.com'; }, delay); //Cambiar la URL por la pagina del sitio
	 }

	 // Redireccionamiento desactivado en index.html, quitar comentarios para activarlo
	 //redirectURL();

})(jQuery);