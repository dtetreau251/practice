const h1 = document.createElement("h1");
h1.textContent = "JavaScript made this!!";
document.getElementById('header').appendChild(h1);
h1.className = "header";

const subTitle = document.createElement("subTitle");
subTitle.innerHTML = '<span class="name">David</span> wrote the JavaScript';
document.getElementById('header').appendChild(subTitle);

const messages = document.getElementsByClassName("message");
messages[0].textContent = "you're great";
messages[1].textContent = "thanks!";
messages[2].textContent = "you're welcome";
messages[3].textContent = "you're great";

let clear = document.getElementById('clear-button')
clear.onclick = function(){myFunction()};

function myFunction(){
const messages = document.getElementsByClassName("message");
messages[0].textContent = "";
messages[1].textContent = "";
messages[2].textContent = "";
messages[3].textContent = "";
}
