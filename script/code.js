const btn = document.getElementById('calculate');

btn.addEventListener('click', function(){
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    if(height == '' || weight == ''){
        alert('please fill out'); 
        return;
    }

    // BMI = weight in kg/ height in m * height in m

    height = height / 100 

    let BMI = (weight / (height * height));
    // console.log(BMI);

    BMI = BMI.toFixed(2);

    document.querySelector('#result').innerHTML = BMI;

    let category = '';
if (weight >= 1){
    switch(true) {
        case(BMI < 18.5 ):
        category = ' Underweight';
        break;
        case(BMI < 24.9 ):
        category = ' Normal';
        break;
        case(BMI < 29.9 ):
        category = ' Overweight';
        break;
        case(BMI < 39.9 ):
        category = ' Obese';
        break;
        }}
    document.getElementById('comment').innerHTML =
    "Your BMI   " + BMI +''+ category ;
})

    // let status = '';

    // if (BMI < 18.5){
    //     status = "underweight";
    // }
    // if (BMI > 18.5){
    //     status = "overweight";
    // }
    // if (BMI >= 18.5 && BMI < 25){
    //     status = "normal";
    // }
    // if (BMI >= 25 && BMI < 30){
    //     status = "overweight";
    // }
    // if ( BMI < 25){
    //     status = "obese";
    // }
    // document.querySelector('.comment').innerHTML = `Comment: You are <span id="comment">${status}</span>`;
