
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minutes');
let second = document.querySelector('.seconds');



let func = () =>{
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    hour.style.rotate = ((30*h) + (m/2)) + 'deg';
    minute.style.rotate = (6*m) + 'deg';
    second.style.rotate = (6*s) + 'deg';
}

setInterval(func,1000)