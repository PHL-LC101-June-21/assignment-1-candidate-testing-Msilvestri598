const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = " "
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space?"
let correctAnswer = "Sally Ride"
let candidateAnswer = " "
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "]
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"]
let candidateAnswers = []
let score = 0


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
const input = require('readline-sync');

let candidateName = input.question("What is your name? ");
console.log("Hello " + candidateName + ", welcome!")
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

 
  for (let i = 0; i < questions.length; i++) {


  candidateAnswers = input.question(questions[i])

  if (candidateAnswers.toUpperCase() === correctAnswers[i].toUpperCase()) {
    console.log(`Yay! 
Your Answer: ${candidateAnswers} 
Correct Answer: ${correctAnswers[i]} `)
    score++;
   } else {
     console.log(`TERRIBLE! 
Your Answer:${candidateAnswers} 
Correct Answer: ${correctAnswers[i]}`) 
   }
  }

}



function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
 console.log(``)
 let grade = console.log("You got " + score + " out of " + questions.length + " correct.")
 
 let percentage = (score * 100)/5
 console.log("You received " + percentage + "% on this test")

 if (percentage >= 80) {
 console.log("TEST PASSED") 
 }
   else {
     console.log("TEST FAILED")
 }

  
  
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};