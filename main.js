let target = document.querySelector("#dynamic");
const stringArr = ["Welcome to my page!", "Hi, I'm Hee Chul"];

function randomStr() {
    let selectedStr = stringArr[Math.floor(Math.random() * stringArr.length)];
    let arr = selectedStr.split("");

    return arr;
}

function blink() {
    target.classList.toggle("active");
}
setInterval(blink, 500)

function resetTyping(){
    target.textContent = "";
    dynamic(randomStr());
}

function dynamic(arr) {
    if(arr.length > 0) {
        target.textContent += arr.shift();
        setTimeout(function() {
            dynamic(arr);
        },80);
 }else{
    setTimeout(resetTyping, 3000);
 }
}

dynamic(randomStr());