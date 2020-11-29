const readlineSync=require('readline-sync');
const chalk = require('chalk');
var score=0;
var highScore=0;
var userName=readlineSync.question(chalk.yellow('Whats your name?'));

console.log(chalk.green('Hello ' + userName + '!! Welcome to the quiz on the state of ASSAM!'));

console.log(chalk.bgMagenta('Rules\n'));
console.log(chalk.bgYellow('+10 for each correct answer\n')); console.log(chalk.bgYellow('-10 for each wrong answer'));

function play(question,answer)
{
  var userAnswer =readlineSync.question(chalk.yellow(question));

  if(userAnswer.toUpperCase()===answer.toUpperCase())
  {
    score=score+10;
    console.log(chalk.bgGreen('correct!'));
  }
  else
  {
    secore=score-10;
    console.log(chalk.bgRed("Wrong answer!"));
    

  }

  console.log('Your score is '+ score);

  console.log("--------------");
}

function highestScore(score)
{

  if(score>=highScore)
  {
    highScore=score;
    console.log(chalk.green('Congrats!! you have beaten the previous highest score , your score is \n' + highScore ));

    console.log(chalk.bgBlue('Please send a screenshot of your score to the admin'));
  }

  else
  {
    console.log(chalk.green("Thanks for playing!! ..See you soon!"))
  }
}

let queBank=[{
  questions:`Assam is famous in world-wide for its production of ? 
  a.Tea
  b.Coffee
  c.Wheat
  d.Bajra`,

  answer:"a"
},
{
  questions:`The famous one-horned Rhino is found in which part of Assam ? 
  a.Dhubri
  b.Kaziranga
  c.Guwahati
  d.Tinsukia`,

  answer:"b"
},

{
  questions:`Which of the following river flows through Assam ? 
  a.Ganga
  b.Yamuna
  c.Brahmaputra
  d.Indus`,

  answer:"c"
},

{
  questions:`What is the capital of Assam  ? 
  a.Jorhat
  b.Sibsagar
  c.Kokrajhar
  d.Guwahati`,

  answer:"d"
},

{
  questions:`Which of the following is a traditional folk dance of Assam  ? 
  a.Bihu
  b.Bharatnatyam
  c.Kuchipudi
  d.Khamba Thoibi`,

  answer:"a"
},

{
  questions:`which of the following famous temple that lie in the state of Assam  ? 
  a.Akshardham temple
  b.Kamakhya temple
  c.Sri Jagannath temple
  d.Brihadeshwara temple`,

  answer:"b"
},
]

for(var i=0; i<queBank.length;i++)
{
  var currentQuestion=queBank[i];
  play(currentQuestion.questions,currentQuestion.answer);
  
}

highestScore(score);
