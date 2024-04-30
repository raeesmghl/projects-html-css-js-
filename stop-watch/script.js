        let min = document.querySelector('.min');
        let sec = document.querySelector('.sec');
        let msec = document.querySelector('.ms');
        let start = document.querySelector('#start');
        let stop = document.querySelector('#stop');
        let reset = document.querySelector('#reset')
        let ms = 0;
        let s = 0;
        let m = 0;
        let interval;
        start.addEventListener('click', () => {
            start.disabled = true;
            stop.disabled = false;
            reset.disabled = false;
            interval = setInterval(() => {
                ms += 1;
                if (ms < 100) {
                    if (ms <= 9) {
                        msec.innerHTML = '0' + ms;
                    }
                    else {
                        msec.innerHTML = ms;
                    }
                } else {
                    ms = 1;
                    s += 1;
                    if (s < 60) {
                        if (s <= 9) {
                            sec.innerHTML = '0' + s;
                        } else {
                            sec.innerHTML = s;
                        }
                    } else {
                        s = 1;
                        m += 1;
                        if (m <= 9) {
                            min.innerHTML = '0' + m;
                        } else {
                            min.innerHTML = m;
                        }
                    }
                }
            }, 10)
        })

        stop.addEventListener('click', () => {
            start.disabled = false;
            stop.disabled = true;
            reset.disabled = false;
            clearInterval(interval)
        });
        reset.addEventListener('click', () => {
            start.disabled = false;
            stop.disabled = true;
            reset.disabled = true;
            clearInterval(interval);
            min.innerHTML = '00';
            sec.innerHTML = '00';
            msec.innerHTML = '00';
            ms = 0;
            s = 0;
            m = 0;
        });
