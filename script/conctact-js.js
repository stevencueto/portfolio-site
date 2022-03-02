
    const accordionButtonOne = document.querySelector('#accordion-button-1');
    const accodionNotShowOne =  document.querySelector('#collapsed-accordion-one');
    const rotateIconOne = document.querySelector('.icon-1');




    accordionButtonOne.addEventListener('click', function(){
        accodionNotShowOne.classList.toggle('accordion-show');
        rotateIconOne.classList.toggle('accordion-toggle-down');
    });

    document.querySelector('#contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const nameForm = document.querySelector('input[name="name"]').value;
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLDataElement/value
        $('#contact-form').css('display', 'none')
        $('.accordion-body').append(`<h3>Thank you for contacting me ${nameForm}! You'll get a reply ASAP.</h3>`)
        $('.accordion-body').append('<i class="fa-solid fa-calendar-days"></i>')
    });