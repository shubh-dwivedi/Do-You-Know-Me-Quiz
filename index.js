var readlinesync = require('readline-sync');
var chalk = require('chalk');

console.log(chalk.green.bgWhite("-: Welcome to this amazing quiz game :-"));

var welcomeMsg = chalk.blue.bgWhite("\n\"Do you know me well enough?\". If you think you do then answer few questions about me and win the title of my forever best friend.\n");

console.log(welcomeMsg);

var nameUser = readlinesync.question(chalk.black.bgWhite("\nPlease enter your name : \t"));

console.log("\nSo, lets start the quiz :-\n");

var questions = [
  {
    question:"What is my full name? : ",
    answer:"Shubham Dwivedi",
  },
  {
    question:"Where do I live? : ",
    answer:"Noida",
  },
  {
    question:"What is my favourite dish? : ",
    answer:"Masala Dosa",
  },
  {
    question:"What is my favourite desert? : ",
    answer:"Kaju Katli",
  },
  {
    question:"What is my favourite hobby? : ",
    answer:"Listening Music",
  },
];

var score=0;


function checkAnswer(question,answer,index) {
  var ansByUser = readlinesync.question(index+". "+question);
  if (ansByUser.toUpperCase() === answer.toUpperCase()) {
    score += 1;
    console.log("Yay! correct answer");
    console.log("\nCurrent Score: ", score);
    console.log("------------------------------------------------");
  } else {
    console.log("Oops! wrong answer. Correct answer is", answer);
    console.log("\nCurrent Score: ", score);
    console.log("------------------------------------------------");
  }
}

function playQuiz() {
  for(var i=0;i<questions.length;i++) {
    var currentQue = questions[i];
    checkAnswer(currentQue.question,currentQue.answer,i+1);
  }
}

function showFinalScore () {
  console.log("Your final score is ", score);

  if(score === questions.length) {
    var exitMsg = "\nCongratulations "+nameUser+", you have won this quiz by answering all questions correctly and proved that you know me very well and hence would forever be my best friend.\nThank you for playing. Have a nice day!"

    console.log(exitMsg);
  } else {
    var difference = questions.length - score;

    var exitMsg = "\nSorry " +nameUser+", but you missd to answer "+difference+" questions correctly and hence you may not know me wery well. Well in that case you must get along with me to know me and hence should invite me for a lunch.\nThank you for playing this game. Have a nice day!"

    console.log(exitMsg);
  }
}

playQuiz();
showFinalScore();