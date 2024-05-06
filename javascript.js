let timer = setTimeout(function() {
    alert("Thank you for spending time on our website");
}, 10000);
window.onbeforeunload = function() {
    clearTimeout(timer);
}