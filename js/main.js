// const profile = {
//     pName:"x._saadi_.x",
//     post:128,
//     followers:320,
//     following:1,
//     isFollowed: false


// };
// console.log(profile)

// let num=prompt("Enter a number");
// if (num%5==0)
// {
//     console.log("It is a multiple of 5")
// }
// else{
//     console.log("Not a multiple of 5")
// }

// let score=prompt("Enter your exam score :")
// if (score>=80 && score<=100){
//     console.log("Grade A");
// }
// else if (score>=70 && score<80)
// {
//     console.log("Grade B");
// }
// else if (score>=60 && score<70)
// {
//     console.log("Grade C");
// }
// else if (score>=50 && score<60)
// {
//     console.log("Grade D");
// }
// else if (score>=0 && score<50)
// {
//     console.log("Grade F");
// }
// else{
//     console.log("Invalid input");
// }

// for (i=0;i<=100;i+=2)
// {
    
//         console.log(i);
    
// }

//JS Level 3
//q1
// i=0;
// while (i<=100){
//     console.log(i);
//     i+=2;
// }
//q2
// let gameNum=25;
// let guess=prompt("Guess a number between 1 to 25");
// guess = Number(guess);
// while (gameNum!==guess){
// guess=prompt("Try again with a new guess :");

// }

//     console.log("You have guessed that right!");

//JS Level 4
//q1
// let sname=prompt("Enter your full name :");
// console.log(`Your username : @${sname+sname.length}`)

//JS Level 5
//q1
// let marks=[85,97,44,37,76,60]
// let sum=0;
// for (let el of marks){
// sum+=el;
// }
// console.log("The average marks are :",sum/marks.length);

//q2
// let arr=[250,645,300,900,50];
// console.log(`Original array is : ${arr}`)
// for (let i=0;i<arr.length;i++){
//     discount=arr[i]/10;
//     arr[i]-=discount;
// }
// console.log(`The discounted array is : ${arr}`)

//JS Level 6
// let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
// console.log(companies.shift())
// console.log(companies)
// companies.splice(1,1,"Ola")
// console.log(companies)
// companies.push("Amazon")
// console.log(companies)

//arrow function for multiplication
// let mul=(a,b)=>{
//     console.log(a*b);
// }
// mul(2,3)

//JS level 7
// function vowelCounter(str){
//     let count=0;
//     lstr=str.toLowerCase()
//     for (let word of lstr)
//     {
//         if (word=="a"|| word=="e" ||word=="i" ||word=="o"|| word=="u"){
//         count++;
//         }
//     }
//     console.log(`No of vowels in ${str} are ${count}`)
// }
// vowelCounter("IlovePakistan")

// //same task using arrow function
// let counter=(str)=>{
//      let count=0;
//     lstr=str.toLowerCase()
//     for (let word of lstr)
//     {
//         if (word=="a"|| word=="e" ||word=="i" ||word=="o"|| word=="u"){
//         count++;
//         }
//     }
//     console.log(`No of vowels in ${str} are ${count}`)
// }
// counter("IloveProgramming")

//JS Level 8
// let arr=[1,2,3,4,5]
// arr.forEach((val)=>{
//     console.log(`The square of ${val} is ${val**2}`)
// })

// let arr=[44,57,98,90,91,8,78,92]
// let newarr=arr.filter((val)=>{
//     return val>90;
// })
// console.log(newarr)

// let num=prompt("Enter a number :")
// let arr=[]
// for (let i=1;i<=num;i++){
//     arr[i-1]=i;
// }
// let sum=arr.reduce((res,curr)=>{
//     return res+curr;
// })
// let prod=arr.reduce((res,curr)=>{
//     return res*curr;
// })
// console.log(sum)
// console.log(prod)

// //JS Level 9 DOM
// let el=document.querySelector("h2")
// el.innerText=el.innerText + " from ApnaCollege";
// console.log(el.innerText)

// let box=document.querySelectorAll(".box")
// console.log(box)
// for(let i=0;i<3;i++){
//     box[i].innerText=`Unique value ${i+1}`;
// }

// //JS level 10 DOM Part 2
// let btn=document.createElement("button");
// btn.innerText="Click Me!";
// btn.style.backgroundColor="red"
// btn.style.color="white"
// let body=document.querySelector("body");
// body.prepend(btn)
// //qs2
// let p=document.querySelector("p");
// p.getAttribute("class")
// p.classList.add("newclass")

//JS Level 11 Events
// let btn=document.querySelector("#btn");
// current="light";
// btn.addEventListener("click", ()=>{
//     if(current==="light"){
//         current="dark";
//         document.body.style.backgroundColor="Black";
//         btn.style.backgroundColor="white";
//         btn.style.color="black";
//     }
//     else{
//         current="light";
//         document.body.style.backgroundColor="White";
//         btn.style.backgroundColor="Black";
//         btn.style.color="White";
//     }
// })
//JS Level 12 Classes
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log(`Name : ${this.name}     Email : ${this.email}`)
    }
};
class admin extends User{
    editData(){
        console.log("What you want to edit ? press 1 for name and 2 for email!")
        let choice=prompt("Enter your choice :")
        if (choice==1){
            this.name=prompt("Enter the name :")
            
        }
        else if(choice ==2){
            this.email=prompt("Enter the mail :")
        }
        else{
            console.log("Invalid input")
        }
        console.log(this.viewData())
    }
}
let o1=new User("Saad","syedsaadahmed726@gmail.com");
let a1=new admin("Saad","syedsaadahmed726@gmail.com");