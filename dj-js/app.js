var square = document.getElementById("square");
square.style.margin = "20px auto";
square.style.border = "10px solid black";
square.style.height = "200px";
square.style.width = "200px";


document.getElementById("square").addEventListener("mouseover", function() {
    square.style.backgroundColor = "blue";
});

document.getElementById("square").addEventListener("mousedown", function() {
    square.style.backgroundColor = "red";
});

document.getElementById("square").addEventListener("mouseup", function() {
    square.style.backgroundColor = "yellow";
});

document.getElementById("square").addEventListener("dblclick", function() {
    square.style.backgroundColor = "green";
});

document.body.addEventListener("mousewheel", function () {
    square.style.backgroundColor = "orange";
});

document.body.addEventListener('keydown', function() {
    if (event.key == 'r') {
        square.style.backgroundColor = "red";
    }
 });

 document.body.addEventListener('keydown', function() {
    if (event.key == 'b') {
        square.style.backgroundColor = "blue";
    }
 });

 document.body.addEventListener('keydown', function() {
    if (event.key == 'y') {
        square.style.backgroundColor = "yellow";
    }
 });

 document.body.addEventListener('keydown', function() {
    if (event.key == 'o') {
        square.style.backgroundColor = "orange";
    }
 });

 document.body.addEventListener('keydown', function() {
    if (event.key == 'g') {
        square.style.backgroundColor = "green";
    }
 });