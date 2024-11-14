let your_score = 0;
let comp_score = 0;

let choices = document.querySelectorAll(".choices");
let choicesc = document.querySelectorAll(".choicesc");
let mssge=document.querySelector("#mssge");
let resetbtn=document.querySelector("#resetbtn");
let  userscore=document.querySelector("#your_score");
let compscore=document.querySelector("#comp_score");

let random_generate = () => {
    let random_ans = ["rock", "paper", "scissors"];
    let ans_ind = Math.floor(Math.random() * 3);


    choicesc.forEach((choice) => {
        choice.style.border = "10px solid transparent";
    });

    choicesc.forEach((choice) => {

        if (choice.getAttribute("id") === random_ans[ans_ind]) {
            choice.style.border = "10px solid #2b2d42";
        }
    });

    return random_ans[ans_ind];
};
let userwinn=(user,user_choice,comp_choice)=>{
 if(user==true){
   mssge.innerText=`You win :D Your ${user_choice} beats ${comp_choice}`;
   your_score++;
  userscore.innerText=your_score;
   mssge.style.backgroundColor="#081c15";
   mssge.style.color="#adbcd4";
 }
 else{
    mssge.innerText=`You lose :( ${comp_choice} beats Your ${user_choice}`;
    comp_score++;
    compscore.innerText=comp_score;
    mssge.style.backgroundColor="#d90429";
    mssge.style.color="#adbcd4";
 }
}


let playgame = (user_choice) => {
    let comp_choice = random_generate();
   
if(user_choice==comp_choice){
    draw_game();
}
else{
    let userwin=true;
    if(user_choice=="rock"&&comp_choice=="paper" ||user_choice=="scissors"&&comp_choice=="rock"||user_choice=="paper"&&comp_choice=="scissors"){
        userwin=false;
        userwinn(userwin,user_choice,comp_choice);
    }
    else{
        userwin=true;
        userwinn(userwin,user_choice,comp_choice);
    }
}

};


const draw_game=()=>{
    mssge.innerText="!!It's a Draw!!";
    mssge.style.backgroundColor="#2b2d42";
    mssge.style.color="#adbcd4";
}


choices.forEach((choice) => {
    let userchoice = () => {
        let choiceid = choice.getAttribute("id");
        playgame(choiceid);
    }
    choice.addEventListener("click", userchoice);
});
let resetevent=()=>{
    your_score=0;
    comp_score=0;
    mssge.innerText="Play your move";
    mssge.style.backgroundColor="#23253b";
    mssge.style.color="#adbcd4";
    userscore.innerText=your_score;
    compscore.innerText=comp_score;
    choicesc.forEach((choice) => {
            choice.style.border = "10px solid transparent";
    });
}
resetbtn.addEventListener("click",resetevent);