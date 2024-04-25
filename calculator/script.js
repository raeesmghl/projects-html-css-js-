

let input = document.querySelector('#screen'); 
let result = document.querySelector('#result'); 


let one = document.getElementById('one');//
let two = document.getElementById('two');//
let three = document.getElementById('three');//
let four = document.getElementById('four');//
let five = document.getElementById('five');//
let six = document.getElementById('six');//
let seven = document.getElementById('seven');//
let eight = document.getElementById('eight');//
let nine = document.getElementById('nine');//
let zero = document.getElementById('zero'); //
let divide = document.getElementById('divide'); //
let plus = document.getElementById('plus'); //
let closeBraket = document.getElementById('closeBraket'); //
let openBraket = document.getElementById('openBraket'); //
let equals = document.getElementById('equals');
let reset = document.getElementById('reset');
let multiply = document.getElementById('multiply'); //
let minus = document.getElementById('minus'); //
let point = document.getElementById('point'); //


one.addEventListener('click',()=>{
    input.value+='1'
});
two.addEventListener('click',()=>{
    input.value+='2'
});
three.addEventListener('click',()=>{
    input.value+='3'
});
four.addEventListener('click',()=>{
    input.value+='4'
});
five.addEventListener('click',()=>{
    input.value+='5'
});
six.addEventListener('click',()=>{
    input.value+='6'
});
seven.addEventListener('click',()=>{
    input.value+='7'
});
eight.addEventListener('click',()=>{
    input.value+='8'
});
nine.addEventListener('click',()=>{
    input.value+='9'
});
zero.addEventListener('click',()=>{
    input.value+='0'
});
point.addEventListener('click',()=>{
    input.value+='.'
});
plus.addEventListener('click',()=>{
    input.value+='+'
});
minus.addEventListener('click',()=>{
    input.value+='-'
});
multiply.addEventListener('click',()=>{
    input.value+='*'
});
divide.addEventListener('click',()=>{
    input.value+='/'
});
openBraket.addEventListener('click',()=>{
    input.value+=')'
});
closeBraket.addEventListener('click',()=>{
    input.value+='('
});


let reseting = () =>{
    input.value = ''
}



function calculateResult() {
    const expression = document.getElementById('screen').value;
    try {
        const final = eval(expression);
        result.innerHTML = final;
    } catch (error) {
        result.innerHTML = 'Error';
    }
}


