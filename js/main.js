const profile = {
    pName:"x._saadi_.x",
    post:128,
    followers:320,
    following:1,
    isFollowed: false


};
console.log(profile)

let num=prompt("Enter a number");
if (num%5==0)
{
    console.log("It is a multiple of 5")
}
else{
    console.log("Not a multiple of 5")
}

let score=prompt("Enter your exam score :")
if (score>=80 && score<=100){
    console.log("Grade A");
}
else if (score>=70 && score<80)
{
    console.log("Grade B");
}
else if (score>=60 && score<70)
{
    console.log("Grade C");
}
else if (score>=50 && score<60)
{
    console.log("Grade D");
}
else if (score>=0 && score<50)
{
    console.log("Grade F");
}
else{
    console.log("Invalid input");
}