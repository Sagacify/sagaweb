 var md = new MobileDetect(window.navigator.userAgent);

var collumns = 40;
var widthDocument = document.querySelector(".header").offsetWidth;
var gutterSize = widthDocument / collumns;
var percent = 100 / collumns;

function getHeight(argument) {
	var heightCount = 0,
	args = argument.querySelectorAll('.data--count');
	Array.prototype.forEach.call(args, function(el, i){
		heightCount += parseInt(el.offsetHeight);
	});
	return heightCount + gutterSize + "px";
}

function matrix(){
	if (md.mobile() === null && md.tablet() === null && $(window).width() > 800) {
	//Move each .block--element on the good position and give good width
		$('.blocks--element').attr('style', '');
		$('.blocks--element').each(function(index, el) {
			el.style.left = $(el).data('left') * percent + "%";
			el.style.width = $(el).data('width') * percent + "%";		
		});

		//Get all .blocks
		var element = document.querySelectorAll('.blocks');
		Array.prototype.forEach.call(element, function(el, i){

			//Give the block a height and margin-bottom
			el.style.height = getHeight(el);
			el.style.marginBottom = gutterSize + "px";

			//Reset the previous height for left and right
			var heighetElementLeft = 0,
			heighetElementRight = 0;

			//Move element on top for left and right
			var dataLeft = el.querySelectorAll('.data-left');
			Array.prototype.forEach.call(dataLeft, function(el, i){
				if(el.hasAttribute('data-reset')){
					heighetElementLeft = 0;
				}
				el.style.top = heighetElementLeft + ( parseInt( $(el).data('top') ) * gutterSize) + "px";
				heighetElementLeft += el.offsetHeight;
			});

			var dataRight = el.querySelectorAll('.data-right');
			Array.prototype.forEach.call(dataRight, function(el, i){
				el.style.top = heighetElementRight + ( parseInt( $(el).data('top') ) * gutterSize) + "px";
				heighetElementRight += el.offsetHeight;
			});
		});
	}else{
		$('.blocks--element, .blocks').attr('style', '');
		$('.blocks--element').css('position', 'relative');
	}
}