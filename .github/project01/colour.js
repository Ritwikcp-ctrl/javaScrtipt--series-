const buttons = document.querySelectorAll('.button')
const body  = document.querySelector('body')

buttons.forEach(function(button) {
    button.addEventListener('click' , function(e){
        if(e.target.id === 'grey'){
            body.style.background = e.target.id;
        }
    })
})

//This is the logic for changing the background onclicking the buttons
