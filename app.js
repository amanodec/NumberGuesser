// Game values
let min=1,
    max=10,
    winningNum=getWinningNum(min,max);
    guessesLeft=3;


// UI Elements
const game=document.querySelector('#game'),
      minNum=document.querySelector('.min-num'),
      maxNum=document.querySelector('.max-num'),
      guessBtn=document.querySelector('#guess-btn');
      guessInput=document.querySelector('#guess-input'),
      message=document.querySelector('.message');


minNum.textContent = min;
maxNum.textContent = max;

// Play Again event lisetener
game.addEventListener('mousedown',function(e){
    if(e.target.className==='play-again'){
        window.location.reload();
    } 
});

// Listen For guess

guessBtn.addEventListener('click',function(){
    
    let guess=parseInt(guessInput.value);

    // Validate
    if(isNaN(guess) || guess<min || guess >max){
        setMessage(`Please enter a number between ${min} and ${max}`,'red');
    }

    // Check if winning number

    if(guess===winningNum)
    {
       gameOver(true,`${winningNum} is Correct`);
    }
    else{
        guessesLeft-=1;

        if(guessesLeft==0)
        {
            gameOver(false,`Game Over, you lost. The correct number was ${winningNum}`)
        }
    
    else{

        guessInput.style.borderColor='red';

        // Clear input
        guessInput.value ='';
        if(guessesLeft==1)
        setMessage(`${guess} is not correct, ${guessesLeft} guess left`,'red');
        else
        setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,'red');
    }
}

});


function gameOver(won,msg)
{
        let color;
        won ===true? color = 'green' : color='red';
        guessInput.disabled=true;

        // Change border color
        guessInput.style.borderColor='color';

        message.style.color=color;
        // Set Message
        setMessage(msg,'color');


        // Play Again

        guessBtn.value='Play Again';
        guessBtn.className +='play-again';
}

function getWinningNum(min,max){
   return  Math.floor(Math.random()*(max-min+1)+min);
}

function setMessage(msg,color)
{
    message.style.color = color;
    message.textContent = msg;
}

