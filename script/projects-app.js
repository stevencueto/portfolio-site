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
        const inputDate = document.querySelector('input[name="picture-date"]').value;
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${inputDate}`);
        const data = await response.json();
        nasaConstructer(data)
    }
    const nasaConstructer = (data) => {
        const $nasaResults = $('#nasa-results');
        const $figure = $('<figure class="nasa-figure"> </figure>')
        $nasaResults.append($figure);
        $figure.append(`<img src=${data.hdurl}>`)
        $figure.append(`<h3>${data.title}</h3>`)
        $figure.append(`<p>${data.explanation}</p>`)
        if(data.copyright){
            $figure.append(`<p>${data.copyright}</p>`)
        }
    }

    document.querySelector("#nasa-image-form").addEventListener("submit", nasaImageOfTheDay)


    // https://github.com/nasa/apod-api