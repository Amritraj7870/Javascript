console.log("hello coders ,doing great");
  

// synchronous code:it execute code line by line.


console.log("hello amrit");
console.log("hey dude");
console.log(12)


// in how namy ways we can handle asynchronous code

let promise= new Promise((resolve, reject) => {
   let a=2;
   if(a>6){
    resolve("promise are fullfilled")
   }    
   else{
    reject("promise are rejected")
   }
})
promise.then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})


//  async nd await



function fetchData(){
   return "fetch  data successfully"
  
}
async function myFunc(){
    
    try {
        let res =await fetchData();
    console.log(res);
   
        
    } catch (error) {
        console.log(error)
    }
}

myFunc();



function outer(){
    let x=5
    function inner(){
        console.log(x)
    }
    inner()

}
outer()

  
//   closure is a function that has access to the parent scope,
// even after the parent function has closed. 

function outer(){
    let x=7
    function inner(){
        console.log(x)
    }
    return inner
}
const fn = outer()
fn()

// 
// callback is a function , which can be passed in another function as a perimeter

function outer(callback){
    console.log("amrit")
callback(2,3)
}
outer(bottle)


function bottle(a,b){
    console.log(a+b)
    
}

    
// shallow copy and deep copy.

const person={
 name:"abhishek kumar",
 profession:"software enginner",
 address:{
     city:"sasaram"
}
}
const obj1={...person}
obj1.name="ankit"
obj1.address.city="baradih"
console.log(obj1)
console.log(person)


//  deep copy

const obj2= structuredClone(person);

obj2.address.city = "baradih";

console.log(person.address.city); // sasaram
console.log(obj2.address.city);   // baradih

// ## anynamous function is a function which does not have any name and it is used to create a function without a name.

function outer() {
    let a = 9;

    return function () {
        return a;
    };
}

const ans = outer();

console.log(ans()); // 9

function outer(){
    let a=9
   
    return function inner (){
        return a
        
    }   
}

const res=outer()

console.log(res())  //9

