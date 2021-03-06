$(document).ready(function(){
	$(document).foundation();
});

$(window).on('load', function(){
	$('.spinner-container').css("opacity","0");
	$('.spinner-container').css("visibility","hidden");
	$('#spinner').css("opacity","0");
	$('#spinner').css("visibility","hidden");
	$('.icon-button').css("display","block");
});

$(function() {
	$.scrollify({
    section : ".scroll",
		interstitialSection : ".nav",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : -6.5,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
  });
});

$('.hamburger').click(function(){
	$(this).toggleClass('is-active');
});

$('#menu li a').click(function () {
	$('#menu').removeClass('active');
	$('.hamburger').removeClass('is-active');
})

$('#burguer-button').click(function(){
	$('#menu').toggleClass('active');
});

// Menu Left
$('.box-news-1-open').click(function(){
	$('#button-menu-left').addClass('hidden');
	$('#button-back-menu').addClass('active');
	$('.box-news-1-open').addClass('active');
	$('.box-news-2-open').addClass('down');
	$('.box-news-3-open').addClass('down');
});
$('#button-back-menu').click(function(){
	$('#button-menu-left').removeClass('hidden');
	$('#button-back-menu').removeClass('active');
	$('[data-show="true"]').removeClass('active');
	$('[data-show="true"]').removeClass('down');
});

// 2
$('.box-news-2-open').click(function(){
	$('#button-menu-left').addClass('hidden');
	$('#button-back-menu').addClass('active');
	$('.box-news-1-open').addClass('down');
	$('.box-news-2-open').addClass('active');
	$('.box-news-3-open').addClass('down');
});

// 3
$('.box-news-3-open').click(function(){
	$('#button-menu-left').addClass('hidden');
	$('#button-back-menu').addClass('active');
	$('.box-news-1-open').addClass('down');
	$('.box-news-2-open').addClass('down');
	$('.box-news-3-open').addClass('active');
});

	var $body = $("body");
// Overlay
$('.box-case-one').click(function(){
	$('.overlay-one').addClass('active');
});
$('.box-case-two').click(function(){
	$('.overlay-two').addClass('active');
});
$('.box-case-three').click(function(){
	$('.overlay-three').addClass('active');
});
$('.box-case-four').click(function(){
	$('.overlay-four').addClass('active');
});
$('.box-case-five').click(function(){
	$('.overlay-five').addClass('active');
});
$('.box-case-six').click(function(){
	$('.overlay-six').addClass('active');
});
$('.box-case-seven').click(function(){
	$('.overlay-seven').addClass('active');
});
$('.box-case-eight').click(function(){
	$('.overlay-eight').addClass('active');
});
$('.box-case-nine').click(function(){
	$('.overlay-nine').addClass('active');
});
$('.box-case-ten').click(function(){
	$('.overlay-ten').addClass('active');
});
$('.box-case-eleven').click(function(){
	$('.overlay-eleven').addClass('active');
});
$('.box-case-twelve').click(function(){
	$('.overlay-twelve').addClass('active');
});

// remove class
$('.modal-exit').click(function(){
	$('.overlay-one').removeClass('active');
});
$('.modal-exit').click(function(){
	$('.overlay-two').removeClass('active');
});
$('.modal-exit').click(function(){
	$('.overlay-three').removeClass('active');
});
$('.modal-exit').click(function(){
	$('.overlay-four').removeClass('active');
});
$('.modal-exit').click(function(){
	$('.overlay-five').removeClass('active');
});
$('.modal-exit').click(function(){
	$('.overlay-six').removeClass('active');
});
$('.modal-exit').click(function(){
	$('.overlay-seven').removeClass('active');
});
$('.modal-exit').click(function(){
	$('.overlay-eight').removeClass('active');
});
$('.modal-exit').click(function(){
	$('.overlay-nine').removeClass('active');
});
$('.modal-exit').click(function(){
	$('.overlay-ten').removeClass('active');
});
$('.modal-exit').click(function(){
	$('.overlay-eleven').removeClass('active');
});
$('.modal-exit').click(function(){
	$('.overlay-twelve').removeClass('active');
});

// lightbox
$('.modal-image-1').click(function(){
	$('.overlay-lightbox-1').addClass('active');
	$body.css("overflow","hidden");
});
$('.lightbox-exit-1').click(function(){
	$('.overlay-lightbox-1').removeClass('active');
});
$('.modal-image-2').click(function(){
	$('.overlay-lightbox-2').addClass('active');
	$body.css("overflow","hidden");
});
$('.lightbox-exit-2').click(function(){
	$('.overlay-lightbox-2').removeClass('active');
});
$('.modal-image-3').click(function(){
	$('.overlay-lightbox-3').addClass('active');
	$body.css("overflow","hidden");
});
$('.lightbox-exit-3').click(function(){
	$('.overlay-lightbox-3').removeClass('active');
});
$('.modal-image-4').click(function(){
	$('.overlay-lightbox-4').addClass('active');
	$body.css("overflow","hidden");
});
$('.lightbox-exit-4').click(function(){
	$('.overlay-lightbox-4').removeClass('active');
});
$('.modal-image-5').click(function(){
	$('.overlay-lightbox-5').addClass('active');
	$body.css("overflow","hidden");
});
$('.lightbox-exit-5').click(function(){
	$('.overlay-lightbox-5').removeClass('active');
});
$('.modal-image-6').click(function(){
	$('.overlay-lightbox-6').addClass('active');
	$body.css("overflow","hidden");
});
$('.lightbox-exit-6').click(function(){
	$('.overlay-lightbox-6').removeClass('active');
});
$('.modal-image-7').click(function(){
	$('.overlay-lightbox-7').addClass('active');
	$body.css("overflow","hidden");
});
$('.lightbox-exit-7').click(function(){
	$('.overlay-lightbox-7').removeClass('active');
});
$('.modal-image-8').click(function(){
	$('.overlay-lightbox-8').addClass('active');
	$body.css("overflow","hidden");
});
$('.lightbox-exit-8').click(function(){
	$('.overlay-lightbox-8').removeClass('active');
});
$('.modal-image-9').click(function(){
	$('.overlay-lightbox-9').addClass('active');
	$body.css("overflow","hidden");
});
$('.lightbox-exit-9').click(function(){
	$('.overlay-lightbox-9').removeClass('active');
});
$('.modal-image-10').click(function(){
	$('.overlay-lightbox-10').addClass('active');
	$body.css("overflow","hidden");
});
$('.lightbox-exit-10').click(function(){
	$('.overlay-lightbox-10').removeClass('active');
});
$('.modal-image-11').click(function(){
	$('.overlay-lightbox-11').addClass('active');
	$body.css("overflow","hidden");
});
$('.lightbox-exit-11').click(function(){
	$('.overlay-lightbox-11').removeClass('active');
});
$('.modal-image-12').click(function(){
	$('.overlay-lightbox-12').addClass('active');
	$body.css("overflow","hidden");
});
$('.lightbox-exit-12').click(function(){
	$('.overlay-lightbox-12').removeClass('active');
});

// grid-Extra
$('.more-grid').click(function() {
	$('.grid-extra').addClass('active')
})
$('.grid-extra-exit').click(function() {
	$('.grid-extra').removeClass('active')
})

// Capacidades modal
$('.consultoria').click(function() {
	$('.planificacion-1').addClass('active')
	$('.planificacion-1').css('animation', 'modalIn 3s forwards');
})
$('.promociones').click(function() {
	$('.planificacion-2').addClass('active')
	$('.planificacion-2').css('animation', 'modalIn 3s forwards');
})
$('.eventos').click(function() {
	$('.planificacion-3').addClass('active')
	$('.planificacion-3').css('animation', 'modalIn 3s forwards');
})
$('.hospitality').click(function() {
	$('.planificacion-4').addClass('active')
	$('.planificacion-4').css('animation', 'modalIn 3s forwards');
})
$('.planification').click(function() {
	$('.planificacion-5').addClass('active')
	$('.planificacion-5').css('animation', 'modalIn 3s forwards');
})
$('.planificacion-1-exit').click(function() {
	$('.planificacion-1').removeClass('active')
	$('.planificacion-1').css('animation', 'modalOut 3s forwards');
})
$('.planificacion-2-exit').click(function() {
	$('.planificacion-2').removeClass('active')
	$('.planificacion-2').css('animation', 'modalOut 3s forwards');
})
$('.planificacion-3-exit').click(function() {
	$('.planificacion-3').removeClass('active')
	$('.planificacion-3').css('animation', 'modalOut 3s forwards');
})
$('.planificacion-4-exit').click(function() {
	$('.planificacion-4').removeClass('active')
	$('.planificacion-4').css('animation', 'modalOut 3s forwards');
})
$('.planificacion-5-exit').click(function() {
	$('.planificacion-5').removeClass('active')
	$('.planificacion-5').css('animation', 'modalOut 3s forwards');
})

// capacidades icons
$('#next-icon-1').click(function() {
	$('.planificacion-2').addClass('active')
	$('.planificacion-1').removeClass('active')
})
$('#back-icon-1').click(function() {
	$('.planificacion-5').addClass('active')
	$('.planificacion-1').removeClass('active')
})
// 2
$('#next-icon-2').click(function() {
	$('.planificacion-3').addClass('active')
	$('.planificacion-2').removeClass('active')
})
$('#back-icon-2').click(function() {
	$('.planificacion-1').addClass('active')
	$('.planificacion-2').removeClass('active')
})
// 3
$('#next-icon-3').click(function() {
	$('.planificacion-4').addClass('active')
	$('.planificacion-3').removeClass('active')
})
$('#back-icon-3').click(function() {
	$('.planificacion-2').addClass('active')
	$('.planificacion-3').removeClass('active')
})
// 4
$('#next-icon-4').click(function() {
	$('.planificacion-5').addClass('active')
	$('.planificacion-4').removeClass('active')
})
$('#back-icon-4').click(function() {
	$('.planificacion-3').addClass('active')
	$('.planificacion-4').removeClass('active')
})
// 5
$('#next-icon-5').click(function() {
	$('.planificacion-1').addClass('active')
	$('.planificacion-5').removeClass('active')
})
$('#back-icon-5').click(function() {
	$('.planificacion-4').addClass('active')
	$('.planificacion-5').removeClass('active')
})
