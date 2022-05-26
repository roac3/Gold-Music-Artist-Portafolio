window.addEventListener('load',()=>{

let slider_item = document.querySelectorAll('.slider_item');

const slider = document.querySelector('.slider');

const btn_left = document.querySelector('.s_left');
const btn_right = document.querySelector('.s_right');

const sliderbtn = document.querySelectorAll('.sliderbtn');

var status = 0; 

sliderlength = slider_item.length - 1

let firstslider_item = slider_item[0];

slider_item[1].style.marginLeft = "0";
firstslider_item.style.marginLeft = "-200%";

for ( var i = 2; i <= sliderlength; i++){
    slider_item[i].style.marginLeft = "200%";
}

function clear(){
    let find = document.querySelector('.activesbtn');
    find.classList.remove('activesbtn');
}


function moveRight(){
    let slider_item = document.querySelectorAll('.slider_item');
    let lastslider_item = slider_item[sliderlength];
    let firstslider_item = slider_item[0];

    slider_item[1].style.marginLeft = "300%";
    firstslider_item.style.marginLeft = "0";
    lastslider_item.style.marginLeft = "-300%";

    clear();
    status++;
    
    if(status > sliderlength) status = 0
    else if (status < 0) status = sliderlength;
    sliderbtn[status].classList.add('activesbtn');

    slider.insertAdjacentElement('afterbegin', lastslider_item);

}

function moveLeft(){
    let slider_item = document.querySelectorAll('.slider_item');
    let firstslider_item = slider_item[0];

    slider_item[1].style.marginLeft = "-300%";
    firstslider_item.style.marginLeft = "300%";
    slider_item[2].style.marginLeft = "0";

    clear();
    status--;
    if(status > sliderlength) status = 0;
    else if (status < 0) status = sliderlength;
    sliderbtn[status].classList.add('activesbtn');

    slider.insertAdjacentElement('beforeend', firstslider_item);

}

function pauseSlider(){
    clearInterval(autoSlider);

    setTimeout(() =>{
        let autoSlider = setInterval(moveRight, 3000);
    }, 3000)
}

btn_left.addEventListener('click', moveLeft);
btn_right.addEventListener('click', moveRight);

let autoSlider = setInterval(moveRight, 5000);


});



