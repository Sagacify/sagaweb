// Get all elements with the class social--button
var social = document.querySelectorAll('.social--button');
// If social is not null/empty -> Add event for the click
if( social != null ){
	Array.prototype.forEach.call(social, function(el, i){
		el.addEventListener("click", function(el){
			//prevent default
			el.preventDefault;
			openWindow(el);
		});
	})
}

function openWindow(el){
	console.log(el.path[0].dataset.network);
	var url = '';
	switch (el.path[0].dataset.network){
		case 'facebook':
			url = 'http://www.facebook.com/sharer.php?u='+ window.location.href +'&title=' + document.title +''
		break;
		case 'twitter':
			url = 'https://twitter.com/intent/tweet?url='+ window.location.href +'&text='+ document.title +'&via=sagacify'
		break;
	}
	window.open(
		url, 
		'sharewindow', 
		'height=450, width=550, 
		top=' + ( window.innerHeight / 2 - 275) + ', 
		left=' + ( window.innerWidth / 2 - 225) + ', 
		toolbar=0, 
		location=0,
		menubar=0, 
		directories=0, 
		scrollbars=0'
		);
	return false;
}