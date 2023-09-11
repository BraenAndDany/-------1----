
let offset = 0;
const sliderLine = document.querySelector('.slider-block-line');

document.querySelector('.slider-right').addEventListener('click', function(){
    offset = offset + 511;
    if (offset > 1022) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-left').addEventListener('click', function () {
    offset = offset - 511;
    if (offset < 0) {
        offset = 1022;
    }
    sliderLine.style.left = -offset + 'px';
});