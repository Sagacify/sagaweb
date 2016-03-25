$(document).ready(function() {
    var e = document.querySelector(".header--navbutton--rdicon");
    document.addEventListener("click", e, function() { console.log("click") })
}), window.onload = function() {
    if (window.outerWidth > 704 && document.querySelectorAll(".blocks").length > 0) {
        matrix();
        var e = new WOW({ boxClass: "blocks--element", animateClass: "fadeInUp", offset: 0, mobile: !0, live: !0, callback: function(e) {} });
        e.init()
    } else(new WOW).init();
    $("#map").length > 0 && (L.mapbox.accessToken = "pk.eyJ1Ijoic2FnYWNpZnkiLCJhIjoiSEhlc0Y3OCJ9.oK-VhYtBUvM3zoVMJXekxg", L.mapbox.map("map", "sagacify.7274f0f9").setView([50.826609, 4.399905999999987], 16))
};
