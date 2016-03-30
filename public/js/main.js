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


$(window).scroll(function() {
if ($(this).scrollTop() > 100){  
    $("#header").addClass("fixedTop");
  }
  else{
    $("#header").removeClass("fixedTop");
  }
});

/* ----------------- NAVIGATION TOGGLE ----------------- */
var elements = document.querySelector('.header--navbutton--rdicon');
var navigation = document.querySelector('.navigation');

$('body').on('click', '.header--navbutton--rdicon', function(event) {
	event.preventDefault();
	toggleNavigation();
});

$(window).resize(function() {
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        matrix();
        showMap();
    }, 500);
});

$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

$.fn.extend({
    disable: function(state) {
        return this.each(function() {
            this.disabled = state;
        });
    }
});


$('#contact_form').submit(function (event) {
  event.preventDefault();
  $('#contact_form .send').disable(true).val('Sending...');

  var $this = $(this);

  var results = $this.serializeObject();

  $.post('/mail', results)
    .done(function () {
      $('#contact_form').fadeOut('500', function () {
        $('#contact_form_success').fadeIn('500');
      });
    })
    .error(function () {
      $('#contact_form').fadeOut('500', function () {
        $('#contact_form_error').fadeIn('500');
      });
    });
});






