        const image1 = document.querySelector(".img1");
        const image2 = document.querySelector(".img2");
        const image3 = document.querySelector(".img3");
        const leftLink = document.querySelector(".a1left");
        const rightLink = document.querySelector(".a2right");
        const text1 = document.querySelector(".text1");
        const text2 = document.querySelector(".text2");
        const text3 = document.querySelector(".text3");

        let front = 1;


        const banner2 = document.querySelector('.SETUP-BANNER')
        const banner1 = document.querySelector('.CPU-BANNER')
        const RightButton = document.querySelector('.rightButton')
        const LeftButton = document.querySelector('.leftButton')

        let front2 = 1;

        const menu = document.querySelector('.menu')
        const headernav = document.querySelector('.header-nav')
        const button = document.querySelector('.button')
        const headernavoverlay = document.querySelector('.header-nav-overlay')

        const tl = new TimelineMax();
    

menu.addEventListener('click', function(){
    
    menu.disabled=true;

    if(menu.classList.contains('open')){
        //closing
        Scroll();
        headernavoverlay.classList.toggle('opacity0')
        headernavoverlay.classList.toggle('opacity1')
        menu.classList.remove('open');
        tl.fromTo(headernav,1, {x: '0%'}, {x:'100%,', ease: Power2.easeIn});
        setTimeout(() => {
            headernav.classList.add('display')
            headernav.classList.remove('flex')
        }, 1000); 
        
        
    } else {
        //opening
        
        menu.classList.add('open');
        
        setTimeout(function() {
            headernavoverlay.classList.toggle('opacity0')
            headernavoverlay.classList.toggle('opacity1');
        }, 800);
        
        headernav.classList.remove('display')
        headernav.classList.add('flex')
        tl.fromTo(headernav,1, {x: '100%'}, {x:'0%,', ease: Power2.easeOut});
        noScroll();
    }

    setTimeout(function() {
        menu.disabled = false;
    }, 1000);
    
})


function noScroll() {
    document.body.style.overflow="hidden";
}

function Scroll() {
    document.body.style.overflow="initial";
}

function addBanner(button1, button2){

    if (RightButton.classList.contains('background1')){
        RightButton.classList.remove('background1');
        RightButton.classList.add('background3');   
    } 
    
    
    if (LeftButton.classList.contains('background5')) {
        LeftButton.classList.remove('background5');
        LeftButton.classList.add('background1');
    }

    

    button1.disabled = true;
    button2.disabled = true;
    
    front2 = 1;
    

    bannerSelector()
    

    setTimeout(function() {
        button1.disabled = false;
    }, 2000);
    setTimeout(function() {
        button2.disabled = false;
    }, 2000);
}
function removeBanner(button1, button2){

    button1.disabled = true;
    button2.disabled = true;
    
    if (LeftButton.classList.contains('background1')){
        LeftButton.classList.remove('background1');
        LeftButton.classList.add('background5');
    } 
    
    
    if (RightButton.classList.contains('background3')) {
        RightButton.classList.remove('background3');
        RightButton.classList.add('background1');
    }

    

    front2 = 2;
    
    bannerSelector()
    
    setTimeout(function() {
        button1.disabled = false;
    }, 2000);
    setTimeout(function() {
        button2.disabled = false;
    }, 2000);
}

function bannerSelector(){
    if (front2 == 2){
        classCheckBanner(banner2, banner1);
    } else if (front2 == 1){
        classCheckBanner(banner1, banner2);
    } 
}

function classCheckBanner(visible, notVisible){
    
    visible.classList.remove('opacity0');
    notVisible.classList.add('opacity0');

}









function add(obj1, obj2){

    obj1.disabled = true;
    obj2.disabled = true;
    if(front==3){
        front = 0;
    }
    front = front + 1;
    selector();
    setTimeout(function() {
        obj1.disabled = false;
    }, 2000);
    setTimeout(function() {
        obj2.disabled = false;
    }, 2000);
}

function remove(obj1, obj2){

    obj1.disabled = true;
    obj2.disabled = true;
    
    if(front == 1){
        front = 4;
    }   
    front = front - 1;
    selector();
    
    setTimeout(function() {
        obj1.disabled = false;
    }, 2000);
    setTimeout(function() {
        obj2.disabled = false;
    }, 2000);
}

function selector(){
    if (front == 2){
        classCheck(image2, image1, image3, text2, text1, text3);
    } else if (front == 1){
        classCheck(image1, image2, image3, text1, text2, text3);
    } else if (front == 3){
        classCheck(image3, image1, image2, text3, text1, text2);
    }
}

function classCheck (visibleImage, notVisibleImage, notVisibleImage2
    ,visibleText, notVisibleText, notVisibleText2){
    
    if (visibleImage.classList.contains('display')){
        
        if (notVisibleImage.classList.contains('display')){

        } else {
            notVisibleImage.classList.add('opacity0');
            notVisibleText.classList.add('opacity0');
            setTimeout(() => {notVisibleImage.classList.add('display');}, 1000);
            setTimeout(() => {notVisibleText.classList.add('display');}, 1000);
        }
        if (notVisibleImage2.classList.contains('display')){

        } else {
            notVisibleImage2.classList.add('opacity0');
            notVisibleText2.classList.add('opacity0');
            setTimeout(() => {notVisibleImage2.classList.add('display');}, 1000); 
            setTimeout(() => {notVisibleText2.classList.add('display');}, 1000);
        }    


        setTimeout(() => {visibleImage.classList.remove("display");}, 1000);
        setTimeout(() => {visibleText.classList.remove("display");}, 1000);
        setTimeout(() => {visibleImage.classList.remove("opacity0");}, 1100);
        setTimeout(() => {visibleText.classList.remove("opacity0");}, 1100);

    } else {
        return;
    }
}
