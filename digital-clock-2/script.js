


let hourEl = document.getElementById('only-hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let ampm = document.getElementById('ampm');


let quote = document.getElementById('quote');

let author = document.getElementById('author');




let getTime = () => {
    let d = new Date();

    let h = d.getHours();

    let m = d.getMinutes();

    let s = d.getSeconds();

    let session = 'AM';


    if (h >= 12) {
        if (h > 12) {
            h = h - 12
        }
        session = 'PM'
    }
    if (h == 0) {
        h = 12
    }


    if (h < 10) {
        h = '0' + h;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }



    hourEl.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
    ampm.innerHTML = session;
}

setInterval(getTime, 1000);







let quotesArray = [
    {
        q: 'Time is money',
        au: 'Benjamin Franklin'
    },
    {
        q: 'Lost time is never found again',
        au: 'Benjamin Franklin',
    },
    {
        q: 'Time waits for no one',
        au: 'Folk Proverb',
    },
    {
        q: 'Time is of the essence',
        au: 'Edward Fitzgerald',
    },
    {
        q: 'Time is a created thing',
        au: 'Lao Tzu',
    },
    {
        q: 'Time is the wisest counselor',
        au: 'Pericles',
    },
    {
        q: 'Time is the longest distance between two places',
        au: 'Tennessee Williams',
    },
    {
        q: 'Time is the devourer of everything',
        au: 'Ovid',
    },
]






let func = () => {
    let random = Math.floor(Math.random() * quotesArray.length);
    let randomQuote = quotesArray[random].q;
    let randomAuthor = quotesArray[random].au;


    quote.innerHTML = randomQuote;
    author.innerHTML = randomAuthor;
};


document.body.onload = func