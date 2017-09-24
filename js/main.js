
// Google Map Customization
//
var initMap = function(){

	var map;

	map = new GMaps({
		el: '#gmap',
		lat: 51.609748,
		lng: 19.932189,
		scrollwheel:false,
		zoom: 15,
		zoomControl : true,
		panControl : false,
		streetViewControl : false,
		mapTypeControl: false,
		overviewMapControl: false,
		clickable: true
	});

	var image = 'images/map-icon.png';
	map.addMarker({
		lat: 51.609748,
		lng: 19.932189,
		icon: image,
		animation: google.maps.Animation.DROP,
		verticalAlign: 'bottom',
		horizontalAlign: 'center',
		backgroundColor: '#3e8bff',
	});


	var styles = [

		{
			"featureType": "road",
			"stylers": [
				{ "color": "#b4b4b4" }
			]
		},{
			"featureType": "water",
			"stylers": [
				{ "color": "#d8d8d8" }
			]
		},{
			"featureType": "landscape",
			"stylers": [
				{ "color": "#f1f1f1" }
			]
		},{
			"elementType": "labels.text.fill",
			"stylers": [
				{ "color": "#000000" }
			]
		},{
			"featureType": "poi",
			"stylers": [
				{ "color": "#d9d9d9" }
			]
		},{
			"elementType": "labels.text",
			"stylers": [
				{ "saturation": 1 },
				{ "weight": 0.1 },
				{ "color": "#000000" }
			]
		}

	];

	map.addStyle({
		styledMapName:"Styled Map",
		styles: styles,
		mapTypeId: "map_style"
	});

	map.setStyle("map_style");
};





jQuery(function($) {

	$(window).load(function () {
		$("body").removeClass("loading");
		$("body").addClass("shown");
		initMap();
	});

	setTimeout(function(){
		$("body").removeClass("loading");
		$("body").addClass("shown");
		initMap();
	}, 5000);


	// Set height of backgrounds

	var background = function() {
		var windowHeight = $(window).height();

		$("#main-slider .background ").css("height", (windowHeight - 30) + "px");
	};

	//Scroll Menu

	var menuToggle = function() {
		var windowWidth = $(window).width();

		if(windowWidth > 767 ){
			$(window).on('scroll', function(){
				if( $(window).scrollTop() > 50 ){
					$('.main-nav').addClass('fixed-menu');
				} else {
					$('.main-nav').removeClass('fixed-menu');
				}
			});
		} else {
			$('.main-nav').addClass('fixed-menu');
				
		}
		background();
	};


	$(document).ready(function(){
		new WOW().init();
		menuToggle();
	});
	
	
	// Carousel Auto Slide Off
	$('#twitter-feed, #sponsor-carousel ').carousel({
		interval: false
	});


	// Contact form validation
	var form = $('.contact-form');
	form.submit(function () {'use strict',
		$this = $(this);
		$.post($this.attr('action'), $this.serialize(), function(data) {
			$this.prev().text(data.message).fadeIn();
			$this.hide();
		},'json');
		return false;
	});

	$( window ).resize(function() {
		menuToggle();
	});

	$('.main-nav ul').onePageNav({
		currentClass: 'active',
	    changeHash: false,
	    scrollSpeed: 900,
	    scrollOffset: 0,
	    scrollThreshold: 0.3,
	    filter: ':not(.no-scroll)'
	});

});

