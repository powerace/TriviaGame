var game = {
	quesTime: 30,
	questions :[{ 
		question: "For which comedy did Tom Hanks receive his first Oscar nomination?",
		choices: ["A League of Their Own", "Sleepless in Seattle", "Splash", "Big"],
		answer: 3,
		image: "https://media.giphy.com/media/iQSdQ9IeLLPkA/giphy.gif" 
	}, {
		question: "Which Oscar host said, “Jack Palance just bungee-jumped off the Hollywood sign?”",
		choices: ["Steve Martin","Billy Crystal","Ellen Degeneres","Chris Rock"],
		answer: 1,
		image:"https://media.giphy.com/media/lqf3NzuPCbEUE/giphy.gif"
	}, {
		question: "For which movie did Morgan Freeman receive his very first Oscar nomination?",
		choices: ["The Shawshank Redemption","Driving Miss Daisy","Million Dollar Baby", "Street Smart"],
		answer: 3,
		image:"https://media.giphy.com/media/OV606AIcx31za/giphy.gif"
	}, { 
		question: "Which film beat out The Wizard of Oz for Best Picture of 1939?",
		choices: ["Mr. Smith Goes to Washington","Gone With the Wind","Stagecoach", "Wuthering Heights"],
		answer: 1,
		image:"https://media.giphy.com/media/1bsPtOBkbMOlO/giphy.gif"
	}, {
		question: "In 1951, who made her only appearance at an Academy Awards Ceremony?",
		choices: ["Bette Davis","Judy Garland","Vivian Leigh","Marilyn Monroe"],
		answer: 3,
		image:"https://media.giphy.com/media/l3q2LnTXtzv9ebxZe/giphy.gif"
	}]
}

//Event Management

$(document).on('click','.answer', quesLogic);

$(document).on('click','.restart', initializeGame);

//function to start and reset game
function initializeGame (){
	quesNum = 0;
	correctAnswers = 0;
	incorrectAnswers = 0;
	$('.restart').hide();
	quesDetails();
			
}

//function to print details of trivia question to page
function quesDetails(){

	$('.answers').empty();

		$('.question').html(game.questions[quesNum].question);
		for (var j = 0; j < game.questions[quesNum].choices.length; j++){
			
			$('.answers').append("<p class=\"answer\">" + game.questions[quesNum].choices[j] + "</p>");
		}	
		quesTimer(game.quesTime);
}

//function for question timer
function quesTimer(number){
	quesInterval = setInterval(function(){
		number--
		$('.timer').html("Time Remaining: " + number);
		if(number === 0){
		clearInterval(quesInterval);
		var message = "<p>Times Up! The correct answer was " + game.questions[quesNum].choices[game.questions[quesNum].answer] + "</p>";
		var image = "https://media.giphy.com/media/l3q2B9Co1B3VJ9cFW/giphy.gif";
		incorrectAnswers++
		nextQues(message,image);
		
		}
	},1000);	

}

//function to go to next question
function nextQues(message, img){
		var finalMessage = "<p>Correct Answers: " + correctAnswers + "<br/>Incorrect Answers: " + incorrectAnswers + "</p>"

		$('.answers').html("<img class=\"oImg\" src=\"" + img + "\">");
		$('.answers').append(message);
		quesNum++
		console.log("Question Number " + quesNum);
		console.log("Total Number of Questions " + game.questions.length)
		if (quesNum === game.questions.length) {
			setTimeout(function(){
				$('.question, .timer').empty();
			$('.answers').html(finalMessage);
			$('.game').append('<button class="restart">Restart</button>');
			return;
			}, 6000)
			
		} else {
			setTimeout(quesDetails, 6000);
		}
	}

function quesLogic(){
	var image = game.questions[quesNum].image;
	if($('.answer').index(this) === game.questions[quesNum].answer){
		var message = "<p>Congratulations! " + game.questions[quesNum].choices[game.questions[quesNum].answer] + " is the correct answer.</p>";
		clearInterval(quesInterval);
		correctAnswers++
		nextQues(message, image);
		
	} else {
		var message = "<p>Sorry! The correct answer was " + game.questions[quesNum].choices[game.questions[quesNum].answer] + "</p>";
		clearInterval(quesInterval);
		incorrectAnswers++
		nextQues(message, image);
	} 
}






//App Display

//Initialize
initializeGame();

