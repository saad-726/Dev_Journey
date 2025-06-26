let uscore=0;
let cscore=0;
let user_score=document.querySelector("#user-score");
let comp_score=document.querySelector("#comp-score");
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg-board");

let result=(userWin)=>{
    if (userWin==true){
        console.log("You Won");
        msg.innerText="You won";
        uscore++;
        msg.style.backgroundColor="green";
        user_score.innerText=uscore;
    }
    else{
        console.log("You lost")
        msg.innerText="You lost";
        cscore++;
        msg.style.backgroundColor="red";
        comp_score.innerText=cscore;
    }
}
let game=(userChoice,comp_choice)=>{
    userWin=true
    if (userChoice===comp_choice){
        console.log("Game is draw")
        msg.innerText="Game is Draw";
        return;
    }
    else{
        if (userChoice==="rock"){
            userWin=comp_choice==="paper"? false: true;
        }
        else if (userChoice==="paper"){
            userWin=comp_choice==="scissor"? false: true;
        }
        else{
            userWin=comp_choice==="paper"? false: true;
        }
        
    }
    result(userWin);
    
};

let compChoice=()=>{
    let choicesArr=["rock","paper","scissor"]
    idx=Math.floor(Math.random()*3)
    console.log("Computer choice",choicesArr[idx])
    return choicesArr[idx];
}
choices.forEach((choice)=>{
 choice.addEventListener("click", ()=>{    
        let userChoice=choice.querySelector("img").getAttribute("id");
        console.log(userChoice);
        let comp_choice=compChoice();
        game(userChoice,comp_choice)
 })
});

