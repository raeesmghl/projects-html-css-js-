


let getTime = () =>{
    let clock = document.getElementsByClassName('clock')[0];
    let hours = new Date().getHours();
let minutes = new Date().getMinutes();
let seconds = new Date().getSeconds();
let session = 'AM';
    if(hours<10){
        hours = '0' + hours;
    }
    if(minutes<10){
        minutes = '0' + minutes;
    }
    if(seconds<10){
        seconds = '0' + seconds;
    }
    if(hours>=12){
        if(hours>12){
            hours = hours -12;
        }
        session = 'PM'
    }
    if(hours==0){
        hours = 12;
    }

    clock.innerHTML = hours + ' : ' + minutes + ' : ' + seconds + ' ' + session;
};
setInterval(getTime,1000);



let el = document.createElement('p');
let txt = document.createTextNode('@raeesmughal');
el.appendChild(txt);
el.classList.add('active');
document.body.appendChild(el)