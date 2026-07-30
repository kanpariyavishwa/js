const user = {
    username : "viss",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "s"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "vishwa"
//     console.log(this);
// }

// chai()

// const chai = function(){
//     let username = "vishwa"
//     console.log(this);
// }

const chai = () =>{
    let username = "vishwa"
    console.log(this);
}


// chai()

// const addTwo = (n1,n2)=>{
//     return n1 + n2
// }// basic when use {} then comulsury use return keyword

// const addTwo = (n1,n2)=> n1 + n2

// const addTwo = (n1,n2)=> (n1 + n2)
// Implesit return 
const addTwo = (n1,n2)=>({username:"vishwa"})// object 


console.log(addTwo(3,4));


//const myArray =[2,5,3]

//myArray.foreach()