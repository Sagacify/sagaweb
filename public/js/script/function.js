/* ---------------- INIT MAP ---------------- */
function showMap(){
	if( document.getElementById('map')) {
    	// Provide your access token
    	L.mapbox.accessToken = 'pk.eyJ1Ijoic2FnYWNpZnkiLCJhIjoiSEhlc0Y3OCJ9.oK-VhYtBUvM3zoVMJXekxg';
    	// Create a map in the div #map
    	var map = L.mapbox.map('map', 'sagacify.7274f0f9').setView([50.826609, 4.399905999999987], 16);	
    	map.touchZoom.disable();
    	map.doubleClickZoom.disable();
    	map.scrollWheelZoom.disable();
    }
}

/* ---------------- INIT HEADER ---------------- */

function pathName(){
	argument = document.location.pathname;
	if(argument == '/' || argument == '/index'){
		$('.navigation').addClass('home');
	}else{
		$('.navigation').removeClass('home');
	}
}


/* ---------------- GET INSTAGRAM ---------------- */
function getInstagram(){
	$('.data-instagram').each(function(index, el) {
		var me = $(this);
		$.get('php/feed.php', function(data) {
			me.html( data );
		});
	});
}

/* ---------------- INIT TEMP ---------------- */
function temperature(){
	var temperature = document.querySelector('.blocks--weather--temp');
	if(temperature){
		$.get('http://api.openweathermap.org/data/2.5/weather?zip=1040,be&units=metric', function(data) {
			var temp = data.main.temp;
			temp = temp.toFixed(1);
			temperature.innerHTML = temp + '°';
		});
	}
}

/* ---------------- TOGGLE NAV ---------------- */
function toggleNavigation(){
	if( $('.header--navbutton--rdicon').hasClass('active') ){
		$('.header--navbutton--rdicon').removeClass('active');
		$('.navigation').removeClass('active');
	}else{
		$('.header--navbutton--rdicon').addClass('active');
		$('.navigation').addClass('active');
	}
}

/* ---------------- INIT WOW.JS ---------------- */	
var wow = new WOW({
	boxClass:     'blocks--element',     
	animateClass: 'fadeInUp',
	offset:       0,         
	mobile:       true,      
	live:         true,      
	callback:     function(box) {
	}
});
wow.init();

var waw = new WOW({
	boxClass:     'blocks--image',     
	animateClass: 'fade',
	offset:       0,         
	mobile:       true,      
	live:         true,      
	callback:     function(box) {
	}
});
waw.init();

var wuw = new WOW({
	boxClass:     'blocks--iconbig',     
	animateClass: 'fade',
	offset:       0,         
	mobile:       true,      
	live:         true,      
	callback:     function(box) {
	}
});
wuw.init();

function wowSync(){
	wow.sync();
	waw.sync();
	wuw.sync();
}