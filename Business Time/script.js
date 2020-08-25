var myIndex = 0;
coffeeSlides();

function coffeeSlides() {
    var i;
    var x = document.getElementsByClassName("coffeSlides");
    for (i = 0; i < x.length; i++) {
        x[i].getElementsByClassName.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].getElementsByClassName.display = "block";
    setTimeout(coffeeSlides, 3000);
}