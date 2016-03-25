object.onscroll = function() {
    var t = document.querySelectorAll(".blocks--element").dataset("parralax");
    Array.prototype.forEach.call(t, function(t, e) { t.style.left = t.dataset.left * percent + "%", t.style.width = t.dataset.width * percent + "%" }) };
