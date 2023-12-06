document.onmouseover = function (event) {
    if (event.target.tagName != 'BUTTON') return;
    let elem = event.target;
    elem.style.background = 'pink';
}
document.onmouseout = function (event) {
    if (event.target.tagName != 'BUTTON') return;
    event.target.style.background = '';
}
function clearAll (){
    a = '';
    b = '';
    operation = '';
    result.innerHTML = '0';
}
clear.inclick = clearAll;

