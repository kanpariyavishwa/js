// singleton  literal  == const allways in singleton
//Object.create

//object literals

const mySym = Symbol("key1")


const jsUser = {
    name: "vishu",
    "full name": "vishu kanpariya",
    [mySym]:"mykey1",
    age : 20,
    location:"nikol",
    email : "v@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","tuesday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email="vs@gmail.com"
// Object.freeze(jsUser)
jsUser.email="s@gmail.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`hello JS user,${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


// myArray = ["v","i"]
// myArray[1]
// 1