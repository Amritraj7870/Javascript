console.log("hello coders ,doing great");

// let n=3;
// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= 4; j++) {
//         row = row+"*";
//     }
//     console.log(row);
// }



// let n=5
// for(let i=1;i<=n;i++ ){
//     let row="";
//     for(let j=1;j<=i;j++){
//         row=row+"*"
//     }
//     console.log(row)
// }

             


// let n=5;
// for(let i=1;i<=n;i++){
//     let space='';
//     for(let j=1;j<=n-i;j++){
//         space+=' ';
//     }
//     let row='';
//     for(let j=1;j<=i;j++){
//    row=row+"*";
//     }
//     console.log(space+row);
// }


// var age =number(prompt("enter your age"));
// if(age>=18)
// {
//     consolke,log("u r eligiblr for vote")
// }
// if(age<18)
// {
//     console.log("u r noteligible for vote")
// }


// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Enter your age: ', (input) => {
//     let age = Number(input);

//     if (isNaN(age)) {
//         console.log("Please enter a valid number.");
//     } else {
//         if (age >= 18) {
//             console.log("You are eligible to vote.");
//         } else {
//             console.log("You are not eligible to vote.");
//         }
//     }

//     rl.close();
// });


// let a=89;
// let b=6;
// console.log(a+b)


// let n=11;
// for(var i=2;i<n;i++){
//     if(n%i==0){
//         break;
//     }
// }
// if(i==n){
//     console.log("this is  prime number",n)
// }else{
//     console.log("it is not prime",n)
// }

//  let a=23;
//   a=25
// console.log(a);

   // function is a blocks of codes used to execute some tasks .

   function sum(a,b,c){
    let y=67;
  function inner(){
   let x=23;
   console.log(y)
   
  }
 
 return  inner();
  console.log("hhi");

}
let res=sum(3,78,2);


function isPrime(num){


for(var i=2;i<num;i++){
   if(num%i==0){
       break;
   }
}
if(i==num){
   console.log("ït is isPrime",num,);
}else{
console.log("ït is not prime num",num);
}


}

isPrime(9);

function findNatural(n){
for(let x=1;x<=n;x++){
   console.log(x)
}
}
findNatural(12)



// synchronous code:it execute code line by line.

console.log("hello amrit");
console.log("hey dude");
console.log(12)