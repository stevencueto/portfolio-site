

    document.addEventListener('click', e=> {
        const toggleMenu = e.target.closest('.toggle-button');
        const navMenuClick = document.querySelector('.nav-elements-aside')
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



