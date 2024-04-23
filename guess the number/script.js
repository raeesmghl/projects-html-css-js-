
let container = document.getElementsByClassName('container')[0];
let guess = document.getElementById('text');
let para = document.getElementById('para');
let btn = document.getElementById('btn');
let count = document.getElementById('countnumber');

let afterOver = document.getElementsByClassName('afterOver')[0];
let replay = document.getElementById('replay');
let totalCount = document.getElementById('totalCount');

let number = Math.floor(Math.random()*100)+1;

let counting = 0;



btn.addEventListener('click',()=>{
    counting++;
    count.innerHTML= counting;
    if(!guess.value){
        para.style.color = 'red';
        para.innerHTML = 'Please enter a number';
    }else if(isNaN(Number(guess.value))){
        para.innerHTML = 'only numbers are allowed';
        para.style.color = 'red'
    }
    else if(guess.value>100 || guess.value<0){
        para.innerHTML = 'please try a number between 1 and 100';
        para.style.color = 'red'
    }else if(guess.value>number){
        para.innerHTML = 'try SMALLER than ' + guess.value;
        para.style.color = 'blue'
    }else if(guess.value<number){
        para.innerHTML = 'try BIGGER than ' + guess.value;
        para.style.color = 'blue'
    }else if(guess.value==number){
        para.innerHTML = 'in '+counting+ (counting>1?' attempts':' attempt');;
        para.style.color = 'blue';
        setTimeout(()=>{
            afterOver.style.scale = '1 1'
        },1000)
        totalCount.innerHTML = counting;
    }
});


replay.addEventListener('click',()=>{
    window.location.reload();
})
