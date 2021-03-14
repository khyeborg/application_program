// define answers
let answersArray = ["a", "b", "c", "d", "e"];
let userAnswersArray = [];
let numberOfQuestions = answersArray.length;
let correctAnswers;
let passcode = "GROWTH";

// get references
let userAnswerArrayRef = document.getElementsByClassName("user_answer");
let submitButtonRef = document.getElementById("submit");
let questionsDivRef = document.getElementById("questions_div");
let resultDivRef = document.getElementById("result_div");

submitButtonRef.onclick = function() {
	correctAnswers = 0

	for (let i = 0; i < userAnswerArrayRef.length; i++) {
		userAnswersArray.push(userAnswerArrayRef[i].value);

		if (String(userAnswerArrayRef[i].value) == answersArray[i]) {
			correctAnswers++;
		} 

		else {
			userAnswerArrayRef[i].value = "";
		}
	}

	if (correctAnswers == numberOfQuestions) {
		resultDivRef.innerHTML = 'CORRECT! <br> The passcode for this challenge is "' + passcode + '"<br>Write this down! You will need it for TBD.<br><a href="../map.html">Click here to go back to the map</a>';
	}

	else {
		resultDivRef.innerHTML = 'Sorry, try again!';
	}

	resultDivRef.style.padding = "20px";
}





