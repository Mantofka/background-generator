var css = document.querySelector("h3");

var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

var body = document.querySelector("body");

var randBtn = document.querySelector(".randBtn");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.innerHTML = "background: " + body.style.background + ";";
}
function setRandomGradient(randColor1, randColor2){
    body.style.background = "linear-gradient(to right, " + randColor1 + ", " + randColor2 + ")";
    css.innerHTML = "background: " + body.style.background + ";";
}

randBtn.addEventListener("click", () => {
    var letters = "0123456789ABCDEF";
    var randColor1 = "#";
    var randColor2 = "#";

    for(var i = 0; i < 6; i++){
        randColor1 += letters[Math.floor(Math.random() * 16)];
        randColor2 += letters[Math.floor(Math.random() * 16)];
    }
    setRandomGradient(randColor1, randColor2);
});





















