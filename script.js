    let random=Math.floor(Math.random()*101);
    let check=document.querySelector('.check');
    let count=100;
    let labalscore=document.querySelector('.labal-score');
    labalscore.innerHTML=count;

    



    check.addEventListener('click',function(){
    let inputnumber=Number(document.querySelector('.input').value);
    console.log(inputnumber);
    console.log(random);
     let guess=document.querySelector('.guess-msg');
    if(!inputnumber)
    {
        let guess=document.querySelector('.guess-msg');
        guess.textContent="No Input";
        console.log("No Number");
    }
    else if(inputnumber>random)
    { 
        count=count-1
        let guess=document.querySelector('.guess-msg');
        guess.textContent="Your Guess Is High";
        let labalscore=document.querySelector('.labal-score')
        labalscore.innerHTML=count;
        if(count<=0)
    {
        let guess=document.querySelector('.guess-msg');
        guess.textContent="Game Over 🙂 🙂 your score is 0";
        let labalscore=document.querySelector('.labal-score')
        labalscore.innerHTML=0;

    }
    }
    else if(inputnumber<random)
    { 
        count=count-1
        let guess=document.querySelector('.guess-msg');
         guess.textContent="Your Guess Is Low";
    //    console.log("Your Guess Is Low");
    let labalscore=document.querySelector('.labal-score')
    labalscore.innerHTML=count;
    if(count<=0)
    {
        let guess=document.querySelector('.guess-msg');
        guess.textContent="Game Over 🙂 🙂 your score is 0";
        let labalscore=document.querySelector('.labal-score')
        labalscore.innerHTML=0;

    }
    } 
    else if(inputnumber==random)
    {
        let guess=document.querySelector('.guess-msg');
        guess.textContent="🤩🤩 Hurray You Won 🤩🤩";
        // console.log("Hurry You Won");
        let highscore=document.querySelector('.Highscore')
        highscore.innerHTML=count
        let element=document.querySelector('.check')
        element.remove();
        document.body.style.backgroundColor="green"
        let randomnumber=document.querySelector('.guessbox')
        randomnumber.textContent=random;
    }
    // else if(count=0)
    // {
    //     let guess=document.querySelector('.guess-msg');
    //     guess.textContent="Game Over 🙂 🙂 your score is 0"; 
    // }
  
})
let restart=document.querySelector('.restart')
restart.addEventListener('click',function(){
    //   document.body.style.backgroundColor="rgb(40, 20, 20)";
    //   let labalscore=document.querySelector('.labal-score');
    //   labalscore.innerHTML=100;
       window.location.reload();
})


