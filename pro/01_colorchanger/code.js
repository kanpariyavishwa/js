const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")


buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(s){
        console.log(s);
        console.log(s.target);
        if(s.target.id === 'grey'){
            body.style.backgroundColor = s.target.id;   
        }
        if(s.target.id === 'white'){
            body.style.backgroundColor = s.target.id;   
        }
        if(s.target.id === 'blue'){
            body.style.backgroundColor = s.target.id;   
        }
        if(s.target.id === 'yellow'){
            body.style.backgroundColor = s.target.id;   
        }
        if(s.target.id === 'purple'){
            body.style.backgroundColor = s.target.id;   
        }
        
    })
});