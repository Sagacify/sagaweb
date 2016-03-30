var checkOp = 0;
window.onload=function(){

	if (checkOp === 0) {
		$('#smooth').addClass('is-coming');
		checkOp = 1;
	};

	/* ----------------- SMOOTHSTATE ----------------- */
	var content   = $('#smooth').smoothState({
		prefetch: true,
		pageCacheSize: 4,
		onStart: {
			duration: 700,
			render: function (url, $container) {
				$('#smooth').removeClass('is-coming');
				$('.loading').addClass('visible');
				$('.header--navbutton--rdicon').removeClass('active');
			}
		},
		onEnd: {
			duration: 500,
			render: function(url, $container, $content){
				document.body.scrollTop = 0;
				$container.html($content);
			}
		},
		callback : function(url, $container, $content) {
			getInstagram();
			matrix();
			pathName();
			temperature();
			showMap();
			wowSync();
			$(".loading").removeClass('visible');
			$('#smooth').addClass('is-coming');
			ga('send', 'pageview', {
				'page': document.location.pathname,
				'title': document.title
			});
		}
	}).data('smoothState');

	/* ---------------- INIT THE GRID ---------------- */
	matrix();
	pathName();
	getInstagram();
	temperature();
	showMap();

};



/* ----------------- NAVIGATION TOGGLE ----------------- */
var elements = document.querySelector('.header--navbutton--rdicon');
var navigation = document.querySelector('.navigation');

$('body').on('click', '.header--navbutton--rdicon', function(event) {
	event.preventDefault();
	toggleNavigation();
});
