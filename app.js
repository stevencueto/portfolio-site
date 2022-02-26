
document.addEventListener('click', e=> {
    const toggleMenu = e.target.closest('.toggle-button');
    const navMenuClick = document.querySelector('.nav-elements-aside')
    console.log('cliked')

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
    }else{
        navMenuClick.classList.remove('active')
    }
    
})




const spaceBattleGallert = $('.space-battle');


let spaceBattleImageIndex = 0;
let spaceBattleImages = ["images/space-battle-1.png", "images/space-battle-2.png", "images/space-battle-3.png", "images/space-battle-4.png"]

const changeGalleyImage = setInterval(function() {


   if (spaceBattleImageIndex >= spaceBattleImages.length) {
    spaceBattleImageIndex = 0;
   }

   spaceBattleGallert.css('background-image', `url('${spaceBattleImages[spaceBattleImageIndex]}')`)
   console.log('new image')
   spaceBattleImageIndex++;
}, 5000);
