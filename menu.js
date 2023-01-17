const menu = document.querySelectorAll("#menu li");
const nav = document.querySelector('#menu')
console.log(nav);

function mouseOut(event) {
    const li = event.target;
    li.classList.add("opacity");
    li.classList.remove("strong");
};

function mouseOver(event) {
    const li = event.target;
    li.classList.remove("opacity");
    li.classList.add("strong");
};

function shadowOn() {
    nav.classList.add("shadow");    
}

function shadowOff() {      
    nav.classList.remove("shadow");
}

for (let i=0; i<4; i++) {
    menu[i].addEventListener('mouseover',mouseOver);
    menu[i].addEventListener('mouseout',mouseOut);
}

nav.addEventListener('mouseover',shadowOn);
nav.addEventListener('mouseout',shadowOff);