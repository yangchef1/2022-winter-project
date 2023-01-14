const menu = document.querySelectorAll("#menu li");


function mouseOut(event) {
    const li = event.target;
    console.log(li);
    li.classList.add("opacity");
    li.classList.remove("strong");
};

function mouseOver(event) {
    const li = event.target;
    li.classList.remove("opacity");
    li.classList.add("strong");
};

for (let i=0; i<5; i++) {
    menu[i].addEventListener('mouseover',mouseOver);
    menu[i].addEventListener('mouseout',mouseOut);
}
