function openWindow() {
    return window.open($(this).attr("href"), "fbShareWindow", "height=450, width=550, \n		top=" + ($(window).height() / 2 - 275) + ", \n		left=" + ($(window).width() / 2 - 225) + ", \n		toolbar=0, \n		location=0, \n		menubar=0, \n		directories=0, \n		scrollbars=0"), !1 }
var elements = document.querySelector(".social--button");
elements.addEventListener("click", function(e) { e.preventDefault, alert(e) });
