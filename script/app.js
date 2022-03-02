window.onload = function () {

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
    let spaceBattleImages = ["images/space-battle-1.png", "images/space-battle-2.png", "images/space-battle-3.png", "images/space-battle-4.png","images/space-battle-5.png"]

    const imageChanger = (img, imgGallery) => {
        let imageIndex = 0;
        setInterval( () =>{
            // set inteveral repeatedly calls a function with a  time delay
            
            if (imageIndex >= imgGallery.length) {
                imageIndex= 0;
            }
            
            img.attr('src', `${imgGallery[imageIndex]}`)
            console.log('new image')
            imageIndex++;
            }, 5000);
    }

    imageChanger(spaceBattleGallery, spaceBattleImages)

    const apiKey = "Ac9Shdxp7X2m6qGG8rO2X8HEplwi8lo8a4sxXBxE"
    async function nasaImageOfTheDay(event){
    event.preventDefault();
    // const nasaResultsSection = document.getElementById('nasa-results')
    // const inputeDate = document.querySelector('input[name="search-term"]').value;
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
    const nasaData = await response.json();
    console.log(response)
    }

    document.querySelector("#nasa-image-form").addEventListener("submit", nasaImageOfTheDay)
}