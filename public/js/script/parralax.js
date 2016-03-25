//Distance from top
var scrolltop = window.pageYOffset,
bodyH = document.body,
htmlH = document.documentElement;


if(window.outerWidth > 704 &&  document.querySelectorAll('.blocks').length > 0){
window.onscroll = function(){
	scrolltop = window.pageYOffset
	var height = Math.max( bodyH.scrollHeight, bodyH.offsetHeight, htmlH.clientHeight, htmlH.scrollHeight, htmlH.offsetHeight );
	var scrollPercentage = parseInt( 100 * scrolltop / (height - window.innerHeight) );

	//Get all element for the parralax effect
	var elemPara = document.querySelectorAll('[data-parralax]');
	Array.prototype.forEach.call(elemPara, function(el, i){
		var bottom_of_object = el.offsetTop,
		bottom_of_window = window.pageYOffset + window.innerHeight,
		speedi = ( $(el).data('parralax') != 0 ) ? $(el).data('parralax') : 1;
		if( bottom_of_window > bottom_of_object ){
			translateY(el, scrollPercentage * speedi);
		}
	});
};
}


var translateY = function(elm, value) {
	var translate = 'translate3d(0px,' + value + 'px, 0px)';
	elm.style['-webkit-transform'] = translate;
	elm.style['-moz-transform'] = translate;
	elm.style['-ms-transform'] = translate;
	elm.style['-o-transform'] = translate;
	elm.style.transform = translate;
};