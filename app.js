window.addEventListener('load',() =>{
    const btn_explore = document.querySelector('.btn');
    const btn_home = document.querySelector('.btn_home');
    const btn_music = document.querySelector('.btn_music');
    const btn_contact = document.querySelector('.btn_contact');

    let animado_toright = document.querySelectorAll('.animado_toright');
    let animado_up = document.querySelectorAll('.animado_up');

    const btn_menu = document.querySelector('.btn_menu');
    const menu = document.querySelector('.menu');

    let vh = window.innerHeight;
    
    btn_explore.addEventListener('click', scrollToMusic)
    btn_music.addEventListener('click', ()=>{
        scrollToMusic();
        menu.classList.toggle('activemenu');
    });

    btn_home.addEventListener('click', ()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          menu.classList.toggle('activemenu');
    });

    btn_contact.addEventListener('click', ()=>{
        let social = document.querySelector('.socials');
        let itemYcord = social.offsetTop
        window.scrollTo({
            top: itemYcord,
            left: 0,
            behavior: 'smooth'
          });
          menu.classList.toggle('activemenu');
    });

    function scrollToMusic(){
        window.scrollTo({
            top: vh,
            left: 0,
            behavior: 'smooth'
          });
    }

    function scrollAnimation(){
        let scroll = document.documentElement.scrollTop;
        let animationHeight = window.innerHeight - 100;
        
        for(var j = 0; j < animado_toright.length; j++){

            let altura = animado_toright[j].offsetTop;

            if(altura - animationHeight < scroll){
                animado_toright[j].style.opacity = 1;
                animado_toright[j].classList.add('ToRightAnimation');
            }
        }

        for(var k = 0; k < animado_up.length; k++){

            let altura = animado_up[k].offsetTop;

            if(altura - animationHeight < scroll){
                animado_up[k].style.opacity = 1;
                animado_up[k].classList.add('UpAnimation');
            }
        }

    }

    scrollAnimation();

    window.addEventListener('scroll', scrollAnimation);
    
    btn_menu.addEventListener('click', ()=>{
        menu.classList.toggle('activemenu');
    });




});

