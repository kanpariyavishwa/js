
function sayMyName(){
    console.log("V");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("W");
    console.log("A");
}

// sayMyName()

// function addTwoNumbers(number1,number2){
    
//     console.log(number1+number2);  
// }

function addTwoNumbers(number1,number2){
    
//    let result =number1+number2
//    return result  
return number1+number2
}

const result = addTwoNumbers(9,9)

// console.log("Results:",result);


function loginUserMessage(userName="S"){
    if(!userName){
        console.log("please enter username");
        return
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage("vishwa"));
// console.log(loginUserMessage());


function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500));

const user = {
    username : "vishwa",
    price:199,
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray =[200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500 ,1000]));
