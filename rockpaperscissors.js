
      // here random takes 0 to 1 so rock takes 0 to 1/3
      // paper will come when the value is 1/3 to 2/3
      // scissors will come when the value is 2/3 and 1

       let computerMove = '';
       let userMove = '';
       let result='';

       let isAutoPlayinng = false;
       let intervalId ;

       function autoplay() {
        if(!isAutoPlayinng){
         intervalId = setInterval(function () {

            const randomNumber = Math.random();

            if (randomNumber < 1/3) {
              userMove = '✊';
            } else if (randomNumber < 2/3) {
              userMove = '✋';
            } else {
              userMove = '✌️';
            }

            pickComputerMove();
            resultOfThat();
            printingResult();

          }, 1000);
        isAutoPlayinng = true;
        } else{
          clearInterval(intervalId);
          isAutoPlayinng = false;

        }

          
      }

      function pickComputerMove(){
        const randomNumber = Math.random();
        if(randomNumber >= 0 && randomNumber <= 1/3){
          computerMove='✊';
        }
        else if (randomNumber>= 1/3 && randomNumber <= 2/3){
          computerMove='✋';
        }
        else if(randomNumber >= 2/3 && randomNumber <= 1){
          computerMove='✌️';
        }
      }
      
        let score = JSON.parse(localStorage.getItem('score'));

        if (!score) {
          score = {
            win: 0,
            losses: 0,
            tie: 0
          };
        }
    

      
      function resultOfThat(){
       if(userMove === computerMove){
        result = 'Tie';
        score.tie++;
       }

       else if((userMove === '✊' && computerMove === '✌️') ||
              (userMove === '✋' && computerMove === '✊') ||
              (userMove === '✌️' && computerMove === '✋')){
                result='won';
                score.win++;
              }
      else{
        result='lose';
       score.losses++;
      }
       localStorage.setItem('score',JSON.stringify(score));
      }
      function printingResult(){
        
         document.getElementById('result').textContent =
         `You picked ${userMove}. Computer picked ${computerMove}. You ${result}.`;
         document.getElementById('win').textContent=`Win: ${score.win}`;
         document.getElementById('losses').textContent=`Losses: ${score.losses}`;
          document.getElementById('tie').textContent=`Tie: ${score.tie}`;
      }
