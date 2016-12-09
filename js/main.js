
(function($) {
    'use strict';

    $.redirectURL = redirectURL;
    $.hideIntro = hideIntro; 

    setTimeout(function(){
		$('.intro').addClass('loaded');
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

	 //Redirecciona el sitio
	 function redirectURL(){
	 	var delay = 10000; //Tiempo en milisegundos
		setTimeout(function(){ window.location = 'http://yahoo.com'; }, delay); //Cambiar la URL por la pagina del sitio
	 }

	 //Esconde el intro para mostrar la pagina web.
	 function hideIntro(){
	 	setTimeout(function(){
			$( ".intro-wrapper, .blackbg").fadeOut("slow");
		}, 10000); 
	 }

	 // Redireccionamiento desactivado en index.html, quitar comentarios para activarlo
	 //redirectURL();
	 hideIntro();

})(jQuery);
