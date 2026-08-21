function upDate(element) {
    console.log("upDate function triggered.");
    document.getElementById("image").innerHTML = element.alt;
    document.getElementById("image").style.backgroundImage =
        "url('" + element.src + "')";
}
function unDo() {
    console.log("unDo function triggered.");
    document.getElementById("image").innerHTML =
        "Hover over an image below to display here.";
    document.getElementById("image").style.backgroundImage = "none";
}
function addTabFocus() {
    console.log("addTabFocus function triggered.");
    var images = document.querySelectorAll(".preview");
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}
window.onload = addTabFocus;
