document.onmouseover = function (event) {
    if (event.target.tagName != 'BUTTON') return;
    let elem = event.target;
    elem.style.background = 'pink';
}
document.onmouseout = function (event) {
    if (event.target.tagName != 'BUTTON') return;
    event.target.style.background = '';
}
let a='';
let b='';
let operation='';
function clearAll (){
    a = '';
    b = '';
    operation = '';
    result.innerHTML = '0';
}
clear.onclick = clearAll ;
let finish = false ;
// let point = document.getElementById('.');
// console.log(point);
// point.onclick = (e) => {
//     if (result.innerText == '0'){result.innerHTML += e.target.id}
//     else return;
// }
let buttons = Array.from(document.querySelectorAll('button'));
buttons.map((button) => {
    button.addEventListener('click',(event) => {
    
        if (event.target.parentNode.classList.contains('numbers') && event.target.id != '=' ){
            if (b == '' && operation == ''){ 
                a += event.target.id;
                result.innerHTML = a;
                
            } 
            else if (finish){
                b = event.target.id 
                result.innerHTML = b;
                finish = false ; 
                
            }
            else {
                b += event.target.id;
                result.innerHTML = b;
                console.log(b);
            }
        }
        if (event.target.parentNode.classList.contains('operators') ){
            operation = event.target.id;
            result.innerHTML = operation;
        }
        if (event.target.id == '='){
            switch (operation) {
                case '+':
                a = (+a) + (+b) ;
                break;
                case '-':
                a = (+a) - (+b) ;
                break;
                case '/':
                a = (+a) / (+b) ;
                break;
                case '*':
                a = (+a) * (+b) ;
                break;
            }
            
            result.innerHTML = a;
            finish = true ;    
        }

        
    })
}
)
