
let imageIndex = 0;
let func = ()=>{
    let images = document.querySelectorAll('.image');
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none'
    }
    imageIndex++;
    if(imageIndex> images.length){
        imageIndex = 1;
    };
    images[imageIndex-1].style.display = 'block'
};
setInterval(func,3000)

