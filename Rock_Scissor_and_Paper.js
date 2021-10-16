//function for user's choice.
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    /*tenary
    var a;
    userInput === 'rock'||userInput==='paper'||userInput==='scissors' || userInput==='bomb'?  a = userInput:   a = console.log('Please input rock or paper or scissors');
    return a;*/
  
   // If else statement
    
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'|| userInput==='bomb'){
      return userInput;
    }
    else {
      return console.log('Please input rock or paper or scissors');
    }
  };
  
  // testing user's choice with a wrong input
  //*console.log(getUserChoice('penk'));
  
  // testing user's choice with a wrong input
  //*console.log(getUserChoice('rock'));
  
  // function for computer's choice
  const getComputerChoice = () =>{
    var num = Math.floor(Math.random() * 3);
    switch (num){
      case 0:
      return 'rock';
      break;
  
      case 1:
      return 'paper';
      break;
  
      default:
      return 'scissors';
      break;
    }
  };
  // testing the computer's choice.
  //*console.log(getComputerChoice());
  //*console.log(getComputerChoice());
  //*console.log(getComputerChoice());
  
  // function to determine the winner
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
      return 'game was a tie';
    }
     //The cheat included
   if (userChoice==='bomb'){
       return 'You won using the cheat'; 
    }
    if (userChoice==='rock'){
      if (computerChoice==='paper'){
        return 'Computer won';
      } else {
        return 'You won';
      }
    }
    if (userChoice==='paper'){
      if (computerChoice === 'scissors'){
        return 'Computer won';
      } else{
        return 'user won';
      }
    }
    if (userChoice === 'scisssors'){
      if (computerChoice === 'paper'){
        return 'You won';
      } else {
        return 'Computer won';
      }
    }
  }
  // testing function determine winner
  //* console.log(determineWinner('rock','paper'));
  
  //play game function
  const playGame = () => {
  var userChoice = getUserChoice('rock');
  console.log(userChoice);
  var computerChoice = getComputerChoice();
  console.log(computerChoice);
  
    
  console.log(determineWinner(userChoice,computerChoice));
  }
  //user should type an input in  
  playGame();
  
  // play game as user should insert a value
  /*const playGame = inputByUser =>{
  var userChoice = getUserChoice(inputByUser);
  console.log(userChoice);
  var computerChoice = getComputerChoice();
  console.log(computerChoice);
  
    
  console.log(determineWinner(userChoice,computerChoice));
  }
  //user should type an input in  
  playGame('');*/
  
  