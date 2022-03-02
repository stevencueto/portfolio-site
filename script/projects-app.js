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
            imageIndex++;
            }, 5000);
    }

    imageChanger(spaceBattleGallery, spaceBattleImages)

    const apiKey = "Ac9Shdxp7X2m6qGG8rO2X8HEplwi8lo8a4sxXBxE"
    async function nasaImageOfTheDay(event){
        event.preventDefault();
        // const inputeDate = document.querySelector('input[name="search-term"]').value;
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
        const data = await response.json();
        console.log(response)
        console.log(data)
        nasaConstructer(data)
    }
    const nasaConstructer = (data) => {
        const $nasaResults = $('#nasa-results');
        $nasaResults.append(`<h3>${data.title}</h3>`)

    }

    document.querySelector("#nasa-image-form").addEventListener("submit", nasaImageOfTheDay)