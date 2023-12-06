document.onmouseover = function (event) {
    if (event.target.tagName != 'BUTTON') return;
    let elem = event.target;
    elem.style.background = 'pink';
}
document.onmouseout = function (event) {
    if (event.target.tagName != 'BUTTON') return;
    event.target.style.background = '';
}
let operattion;
let a;
let operators = ['+','-','/','*','='];
let buttons = Array.from(document.querySelectorAll('button'));
//console.log (buttons);
buttons.map((button) => {
    button.addEventListener('click',(event) => {
        console.log(event.target.classList)  
        if (result.innerText == '0' && event.target.id != '.' && event.target.id != 'clear'){result.innerHTML = event.target.id }
        else {result.innerHTML += event.target.id; 
        
        }
        if (event.target.id == 'clear') {result.innerHTML = '0'}  
        if (event.target.id == '+'||event.target.id=='-'||event.target.id=='*'||event.target.id=='/'||event.target.id=='='){
            a = result.textContent.slice(0,-1);
            
            result.innerHTML = event.target.id;
            operattion = event.target.id;            
        }
        if (a&&operattion && event.target.id != 'clear'){
            result.innerHTML = event.target.id;
            
        }
        
    })
}
)
