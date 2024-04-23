

let add = document.querySelector('i');

let container = document.querySelector('.container');


let initial = document.getElementById('initial');


let createDiv = (bName,bURL) =>{


let aTag = document.createElement('a');
aTag.href = bURL;
aTag.target = '_blank';
aTag.className = 'aTag';


// making div with class = 'inside';
    let div = document.createElement('div');
    div.className = 'inside';


// making els for name and url and setting their classes;

    let nam = document.createElement('p');
    nam.className = 'name';
    nam.textContent = bName;




    let url = document.createElement('p');
    url.className = 'url';
    url.textContent = bURL;


    div.appendChild(nam);
    div.appendChild(url);

    aTag.appendChild(div);
    container.prepend(aTag);
}




let ask = () =>{
    let a = prompt('name of the bookmark');
    let b = prompt('url?');

    createDiv(a,b);
}


add.addEventListener('click',()=>{
    initial.style.display = 'none'
    ask()
});


