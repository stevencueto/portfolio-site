document.addEventListener('click', e=> {
    const toggleMenu = e.target.closest('.toggle-button');
    const navMenuClick = document.querySelector('.nav-elements-aside')
    console.log('cliked')
    // e. closest is to make sure that the user is clicking inside the dropdown menu, this was initially set when the bar was fix which I had to change because it wouldn't sit on top of the other elements no matter the z-index
    if(toggleMenu){
        navMenuClick.classList.toggle('active')
        return
    }
    let currentMenu
    if(currentMenu){
        currentMenu = document.closest('.nav-elements-aside');
        navMenuClick.classList.toggle('active')
    }

    if(currentMenu){
        return
        //stops the function there if they clicked element is inside the menu bar. else if click outside closes the menu.
    }else{
        navMenuClick.classList.remove('active')
    }
    
})


// function is to change the image in the project section section
const spaceBattleGallery = $('.space-battle');
let spaceBattleImages = ["images/space-battle-1.png", "images/space-battle-2.png", "images/space-battle-3.png", "images/space-battle-4.png"]

const imageChanger = (img, imgGallery) => {
    let imageIndex = 0;
    setInterval( () =>{
        // set inteveral repeatedly calls a function witha  time delay
        
           if (imageIndex >= imgGallery.length) {
            imageIndex= 0;
           }
        
           img.attr('src', `${imgGallery[imageIndex]}`)
           console.log('new image')
           imageIndex++;
        }, 5000);
}

imageChanger(spaceBattleGallery, spaceBattleImages)


const accordionButtonOne = document.querySelector('#accordion-button-1');
const accodionNotShowOne =  document.querySelector('#collapsed-accordion-one');
const rotateIconOne = document.querySelector('.icon-1');



const accordionButtonTwo = document.querySelector('#accordion-button-2');
const accodionNotShowTwo =  document.querySelector('#collapsed-accordion-two');
const rotateIconTwo = document.querySelector('.icon-2');



const accordionButtonThree = document.querySelector('#accordion-button-3');
const accodionNotShowThree =  document.querySelector('#collapsed-accordion-three');
const rotateIconThree = document.querySelector('.icon-3');



accordionButtonOne.addEventListener('click', function(){
    accodionNotShowOne.classList.toggle('accordion-show');
    rotateIconOne.classList.toggle('accordion-toggle-down');
});

accordionButtonTwo.addEventListener('click', function(){
    accodionNotShowTwo.classList.toggle('accordion-show')
    rotateIconTwo.classList.toggle('accordion-toggle-down')
})

accordionButtonThree.addEventListener('click', function(e){
    accodionNotShowThree.classList.toggle('accordion-show');
    rotateIconThree.classList.toggle('accordion-toggle-down');
});