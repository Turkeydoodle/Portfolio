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
function createelement() {
    let dividee = document.createElement("div");
    let node = document.createTextNode("div3");
    dividee.appendChild(node);
    dividee.style.width = '100px';
    dividee.style.height = '100px';
    dividee.style.backgroundColor = 'yellow';
    dividee.style.color = 'black';
    dividee.style.padding = '8px';
    dividee.style.border = '2px solid #333';
    dividee.style.position = 'absolute';
    dividee.style.left = '500px';
    dividee.style.top = '500px';
    dividee.style.zIndex = '9999';
    document.body.appendChild(dividee);
}
div.onclick = createelement;
div2.onmouseover = divcolor2;
div2.onmouseout = divreset2;