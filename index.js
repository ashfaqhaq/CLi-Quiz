var readlineSync = require('readline-sync');
const chalk = require('chalk');
var score=0;

var userName= readlineSync.question(chalk.yellow("What's your name?\n"));
console.log(chalk.green("Welcome " + userName));

if(readlineSync.keyInYN(chalk.yellow('Ready to take quiz? \n'))) {
  // if Y pressed
  console.log("---------");
  console.log(chalk.bgCyanBright.bold.underline("Here are the rules :"));
  console.log("1. You are given 5 questions.");
  console.log("2. One correct answer adds 1 point.");
  console.log("3. One wrong answer deducts 1 point");
  console.log("All the Best !");
  console.log("---------");
}
else {
  console.log("---------");
  console.log(chalk.green.bold("Have a good day!"));
  process.exit();
}

// Quiz Questions

var ques1 ={
  ques: " Which application is used for messaging? ",
  options : [ "Signal" , "Pinterest" , "Github"],
  ans: 1
}

var ques2 ={
  ques: " Which application was sold at 18 Billion $? ",
  options : [ "Instagram" , "Whatsapp" , "Freecharge"],
  ans: 2
}

var ques3 ={
  ques: " The founder of Tesla motors is? ",
  options : [ "Martin Eberhard" , "Peter Thiel" , "Elon Musk"],
  ans: 1
}
var ques4 ={
  ques: "Blue origin space company is owned by? ",
  options : [ "Elon Musk" , "Bill Gates" , "Jeff Bezos"],
  ans: 3
}

var ques5 ={
  ques: "Snapchat buyout was appraoched by which company? ",
  options : [ "Google" , "Microsoft" , "Facebook"],
  ans: 3
}

var quizArray=[ques1, ques2, ques3, ques4, ques5];

for(var i=0;i<5;i++){
  check(quizArray[i],i);
}

function check(objects,i) {
  
  console.log("Question " + (i+1) + ": ");
  console.log(chalk.blue.bold(objects.ques));
  
  var userAns =readlineSync.keyInSelect(objects.options, ("Choose -"));

  // if statement

  if((userAns+1) == objects.ans) {
    console.log(chalk.green.bold(" You are right!"));
    score++;
  }
  else {
    console.log(chalk.red.bold("You are wrong"));
    score--;
    console.log(chalk.cyan.bold("Correct answer is : " + objects.options[objects.ans-1]));
  }

  console.log(chalk.cyan.bold("TOTAL SCORE : ") + score+ "\n");
  console.log("-----------");
}