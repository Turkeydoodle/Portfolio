div = document.getElementById("div");
function divcolor() {
    div.style.backgroundColor = "green";
}
function divreset() {
    div.style.backgroundColor = "blue";
}
div.onmouseover = divcolor;
div.onmouseout = divreset;
div2 = document.getElementById('div2');
function divcolor2() {
    div2.style.backgroundColor = "green";
}
function divreset2() {
    div2.style.backgroundColor = "red";
}
div2.onmouseover = divcolor2;
div2.onmouseout = divreset2;