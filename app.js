let userscore = 0;
let pcscore = 0;
const rulebtn =  document.querySelector('.rules-btn');
const showrule = document.querySelector('.output-rule');
const hiderule = document.querySelector('.close');
const paper = document.querySelector('.paper-box');
const scissors = document.querySelector('.scissors-box');
const rock = document.querySelector('.rock-box');
const gameresult = document.querySelector('.result');
const displayoff = document.querySelector('.play-again');



//load 





// change display

function resulton(){
    document.querySelector('section').style.display = 'none';
    document.querySelector('.result').style.display = 'block';
    setTimeout(function delay(){
        document.querySelector('.result-com').style.visibility = 'visible';
    }, 2000);
    
    
    
};


displayoff.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('section').style.display = 'block';
    document.querySelector('.result').style.display = 'none';
    document.querySelector('.result-com').style.visibility = 'hidden';
    document.querySelector('.result-text > h2').innerHTML = ''

});



//Get computer choice

function computer(){
    const choices = ['p', 's', 'r'];
    const randomNum = (Math.floor(Math.random() * 3));
    switch(randomNum){
        case 0:
        document.querySelector('.result-com').innerHTML = `
          <div class="paper-box" style="margin-right: 0;">
            <div class="bg-white">
             <img class="paper" src="images/icon-paper.svg" alt="paper">
            </div>
          </div>
         </div>`
        break;

        case 1:
        document.querySelector('.result-com').innerHTML = 
        ` 
        <div class="scissors-box" style="margin-left: 0;">
           <div class="bg-white">
            <img class="scissors" src="images/icon-scissors.svg" alt="scissors">
           </div>
          </div>`
          break;

        case 2:
        document.querySelector('.result-com').innerHTML =
        ` 
        <div class="rock-box">
             <div class="bg-white-r">
               <img class="rock" src="images/icon-rock.svg" alt="rock">
             </div>
          </div>`
        break;
    }
    return choices[randomNum];
}

//Win Lose Draw


function gamescore(result){

    switch(result){
        case "win":
        userscore++;
        setTimeout(function delayscoreuser(){
            document.querySelector('.user').innerHTML = userscore;
            document.querySelector('.result-text > h2').innerHTML = 'YOU WIN!!'
        }, 2000);
        break;
        case "lose":
        pcscore++;
        setTimeout(function delayscorecom(){
            document.querySelector('.computer').innerHTML = pcscore;
            document.querySelector('.result-text > h2').innerHTML = 'YOU LOSE!!'
        }, 2000);

        break;
        case "draw":
        setTimeout(function delaydraw(){
            document.querySelector('.result-text > h2').innerHTML = 'YOU DRAW!!'

        }, 2000); 
        break;
    }
}


//Win Lose Draw

function game(userChoice) {
    const computerPic = computer();
    switch (userChoice + computerPic){
        case "rs":
        case "sp":
        case "pr":
            gamescore('win');
            shadow('user');
           break;


        case "rp":
        case "sr":
        case "ps":
            gamescore('lose');
            shadow('computer');
            break;

        case "rr":
        case "ss":
        case "pp":
            gamescore('draw');
            shadow('draw');
            break;
    }
 
}


// Winer shadow

 function shadow(winner) {
    document.querySelector('.result-user').classList.remove('winner');
    document.querySelector('.result-com').classList.remove('winner');

    switch(winner){
        case "user":
            setTimeout(function delayshadow(){
            document.querySelector('.result-user').classList.add('winner');
            }, 3000);
            break;
        case "computer":
            document.querySelector('.result-com').classList.add('winner');
            break;
        case "draw":
            setTimeout(function delaydraw(){
                document.querySelector('.result-user').classList.add('winner');
                document.querySelector('.result-com').classList.add('winner');
            }, 3000);
            break;

    }


}



 

//Get user choice
function main(){

    paper.addEventListener('click', function(){
        game("p");
        resulton();
        document.querySelector('.result-user').innerHTML = `
        <div class="paper-box" style="margin-right: 0;">
        <div class="bg-white">
           <img class="paper" src="images/icon-paper.svg" alt="paper">
        </div>
     </div>`
    
    });
    
    scissors.addEventListener('click', function(){
        game("s");
        resulton();
        document.querySelector('.result-user').innerHTML = 
        `
        <div class="scissors-box" style="margin-left: 0;">
           <div class="bg-white">
          <img class="scissors" src="images/icon-scissors.svg" alt="scissors">
        </div>
      </div>`
    });
    
    
    rock.addEventListener('click', function(){
        game("r");
        resulton();
        document.querySelector('.result-user').innerHTML =
        ` 
        <div class="rock-box">
        <div class="bg-white-r">
          <img class="rock" src="images/icon-rock.svg" alt="rock">
        </div>
      </div>`
    });


    

}

main();



 







// Rules show & hide

rulebtn.addEventListener('click', function(e){
   e.preventDefault();
   showrule.style.display = 'block'
});

hiderule.addEventListener('click', function(e){
    e.preventDefault();
    showrule.style.display = 'none'
});







