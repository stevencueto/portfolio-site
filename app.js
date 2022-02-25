console.log('It Works')

document.addEventListener('click', e=> {
    const toggleMenu = e.target.closest('.toggle-button');
    const navMenuClick = document.querySelector('.nav-elements')

    if(toggleMenu){
        navMenuClick.classList.toggle('active')
        return
    }
    let currentMenu
    if(currentMenu){
        currentMenu = document.closest('.nav-elements');
        navMenuClick.classList.toggle('active')
    }

    if(currentMenu){
        return
    }else{
        navMenuClick.classList.remove('active')
    }
    
})


