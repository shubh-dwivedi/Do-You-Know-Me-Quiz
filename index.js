var readlinesync = require('readline-sync');

var user = readlinesync.question("Enter your name : ");

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
    answer:"Ras Malai",
  },
  {
    question:"What is my favourite hobby? : ",
    answer:"Listening Music",
  },
];

var score=0;

function welcomeUser() {
  var welcomeMsg = "Welcome "+ user + ". \n\"Do you know me well enough?\". If you think you do then play this awesome quiz and test your knowledge about me. So let's begin :-\n"
  console.log(welcomeMsg);
}

function checkAnswer(question,answer) {
  var ansByUser = readlinesync.question(question);
  if (ansByUser.toUpperCase() === answer.toUpperCase()) {
    score += 1;
    console.log("Yay! correct answer");
    console.log("\nCurrent Score: ", score);
    console.log("------------------------------------------------");
  } else {
    console.log("Oops! wrong answer");
    console.log("\nCurrent Score: ", score);
    console.log("------------------------------------------------");
  }
}

function playQuiz() {
  for(var i=0;i<questions.length;i++) {
    var currentQue = questions[i];
    checkAnswer(currentQue.question,currentQue.answer);
  }
}

function showFinalScore () {
  console.log("Your final score is ", score);

  if(score === questions.length) {
    var exitMsg = "Congratulations! you have won this quiz by answering all questions correctly and proved that you know me very well and hence would forever be my best friend. Thank you for playing. Have a nice day!"

    console.log(exitMsg);
  } else {
    var difference = questions.length - score;

    var exitMsg = "Sorry! you missd to answer "+difference+" questions correctly and hence you may not know me wery well. Well in that case you must get along with me to know me and hence could invite me for a treat at your house. Thank you for playing this game. Have a nice day!"

    console.log(exitMsg);
  }
}

welcomeUser();
playQuiz();
showFinalScore();