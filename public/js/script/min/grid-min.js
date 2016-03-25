function getHeight(t) {
    var e = 0,
        r = t.querySelectorAll(".data--count");
    return Array.prototype.forEach.call(r, function(t, r) { e += parseInt(t.offsetHeight) }), e + gutterSize + "px" }

function matrix() {
    var t = document.querySelectorAll(".blocks--element");
    Array.prototype.forEach.call(t, function(t, e)
     { 
     	t.style.left = t.dataset.left * percent + "%", t.style.width = t.dataset.width * percent + "%" });
    var e = document.querySelectorAll(".blocks");
    Array.prototype.forEach.call(e, function(t, e) {
     t.style.height = getHeight(t), t.style.marginBottom = gutterSize + "px";
        var r = 0,
            o = 0,
            l = t.querySelectorAll(".data-left");
        Array.prototype.forEach.call(l, function(t, e) { t.hasAttribute("data-reset") && (r = 0), t.style.top = r + t.dataset.top * gutterSize + "px", r += t.offsetHeight });
        var a = t.querySelectorAll(".data-right");
        Array.prototype.forEach.call(a, function(t, e) { t.style.top = o + t.dataset.top * gutterSize + "px", o += t.offsetHeight }) }), (new WOW).init() }
var collumns = 40,
    widthDocument = document.querySelector(".header").offsetWidth,
    gutterSize = widthDocument / collumns,
    percent = 100 / collumns;
window.onload = function() { matrix() };
