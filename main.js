'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    console.log(window.scrollY);
    console.log('navbarHeight: ${navbarHeight}');
    if (window.scrollY>navbarHeight){
        navbar.classList.add('navbar--dark');

    }else
    navbar.classList.remove('navbar--dark');
});

//Handle scrolling when tapping on the navber menu//

const navbarmenu = document.querySelector('.navbar__menu');
navbarmenu.addEventListener('click', (event)=>{
    
    const target = event.target;
    const link = target.dataset.link;
    if(link==null){
        return;
    }
    scrollIntoView(link);
})

//click on contact me //

const scrollTalk = document.querySelector('.home__contact');
scrollTalk.addEventListener('click', () => {
    const scrollTo= document.querySelector('#contact');
    scrollTo.scrollIntoView({behavior: 'smooth'});
});

// scroll transparency//


const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    home.style.opacity = 1-window.scrollY/homeHeight;
});



function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}

//show arrow-up when scroll down//
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll',()=>{
    if(window.scrollY>homeHeight/2){
        arrowUp.classList.add('visible');

    }else
    arrowUp.classList.remove('visible');
})

//handle click//
arrowUp.addEventListener('click', () =>{
    scrollIntoView('#home');
});

