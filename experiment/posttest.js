/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "If the temperature difference across the liquid layer was increased, how would it affect the rate of heat transfer?",  ///// Write the question inside double quotes
      answers: {
        a: "It would decrease",                  ///// Write the option 1 inside double quotes
        b: "It would remain constant",                  ///// Write the option 2 inside double quotes
        c: "It would increase",                  ///// Write the option 3 inside double quotes
        d: "It would fluctuate randomly"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

    {
      question: " During your experiment, if the thickness of the liquid layer was doubled, what would happen to the thermal conductivity value (assuming ideal conditions)?",  ///// Write the question inside double quotes
      answers: {
        a: "It would double",                  ///// Write the option 1 inside double quotes
        b: "It would become half",                  ///// Write the option 2 inside double quotes
        c: "It would remain the same",                  ///// Write the option 3 inside double quotes
        d: "It would become zero"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line
      {
      question: " Which one of the following could be a possible reason for errors in your measured thermal conductivity?",  ///// Write the question inside double quotes
      answers: {
        a: "Constant room temperature",                  ///// Write the option 1 inside double quotes
        b: "Perfect insulation",                  ///// Write the option 2 inside double quotes
        c: "Heat loss to surroundings",                  ///// Write the option 3 inside double quotes
        d: " Use of a calibrated thermometer"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },    
    {
      question: " If your calculated thermal conductivity value is significantly lower than the standard value, what could be a likely cause?",  ///// Write the question inside double quotes
      answers: {
        a: "Very low thermal gradient",                  ///// Write the option 1 inside double quotes
        b: "High ambient light",                  ///// Write the option 2 inside double quotes
        c: "Use of distilled water",                  ///// Write the option 3 inside double quotes
        d: "Accurate timing"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },    
    {
      question: " What conclusion can you draw if the thermal conductivity value remains constant after repeating the experiment multiple times under the same conditions?",  ///// Write the question inside double quotes
      answers: {
        a: "The experiment setup is faulty",                  ///// Write the option 1 inside double quotes
        b: " The thermal conductivity of liquid is not measurable",                  ///// Write the option 2 inside double quotes
        c: "The experimental setup is consistent and reliable",                  ///// Write the option 3 inside double quotes
        d: "The liquid has no heat transfer capability"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },                                      


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////