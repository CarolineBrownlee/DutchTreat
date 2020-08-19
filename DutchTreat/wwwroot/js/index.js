

console.log("Plural Sight");

var theForm = document.getElementById("theForm");
theForm.hidden = true;

var button = document.getElementById("buyButton");
button.addEventListener("click", function () {
    alert("Buying Item");
});

var productInfo = document.getElementsByClassName("product-props");
