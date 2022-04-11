    // function is to change the image in the project section section
    const spaceBattleGallery = $('.space-battle');
    const spaceBattleImages = ["images/your-movie-hub-1.png", "images/your-movie-hub-2.png","images/your-movie-hub-3.png","images/your-movie-hub-4.png","images/your-movie-hub-5.png","images/your-movie-hub-6.png","images/your-movie-hub-7.png",]

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
        if(data.hdurl){
            $figure.append(`<img src=${data.hdurl}>`)
            $figure.append(`<h3>${data.title}</h3>`)
            $figure.append(`<p>${data.explanation}</p>`)
            if(data.copyright){
                $figure.append(`<p>${data.copyright}</p>`)
            }
        }else{
            $figure.append(`<p>Seems like nasa didn't have anything for that date, try again</p>`)
        }
       
    }

    document.querySelector("#nasa-image-form").addEventListener("submit", nasaImageOfTheDay)


    // https://github.com/nasa/apod-api