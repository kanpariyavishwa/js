const form = document.querySelector('form')
//this usecase will give you empty 
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(s){
    s.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML =    `please give a valid height ${height}`;
    }else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML =    `please give a valid weight ${weight}`;
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        if(bmi<18.6){
            results.innerHTML = `your BMI is${bmi}<br> Under Weight`;
        }else if(bmi>=18.6 && bmi<=24.6){
            results.innerHTML = `your BMI is${bmi}<br> Normal Weight`;
        }else{
            results.innerHTML = `your BMI is${bmi}<br> OverWeight`;
        }
        //show the results 
        // results.innerHTML =    `<span>${bmi}</span>`;
    }
});
