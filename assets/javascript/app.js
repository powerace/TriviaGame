var game = {
	quesTime: 3,
	questions :[{ 
		question: "For which comedy did Tom Hanks receive his first Oscar nomination?",
		choices: ["A League of Their Own", "Sleepless in Seattle", "Splash", "Big"],
		answer: 3,
		image: ""
	}, {
		question: "Which Oscar host said, “Jack Palance just bungee-jumped off the Hollywood sign?”",
		choices: ["Steve Martin","Billy Crystal","Ellen Degeneres","Chris Rock"],
		answer: 1,
		image:""
	}, {
		question: "For which movie did Morgan Freeman receive his very first Oscar nomination?",
		choices: ["The Shawshank Redemption","Driving Miss Daisy","Million Dollar Baby", "Street Smart"],
		answer: 3,
		image:""
	}, { 
		question: "Which film beat out The Wizard of Oz for Best Picture of 1939?",
		choices: ["Mr. Smith Goes to Washington","Gone With the Wind","Stagecoach", "Wuthering Heights"],
		answer: 1,
		image:""
	}, {
		question: "In 1951, who made her only appearance at an Academy Awards Ceremony?",
		choices: ["Bette Davis","Judy Garland","Vivian Leigh","Marilyn Monroe"],
		answer: 3,
		image:""
	}]
}

//Event Management


//App Logic
function initializeGame (){
	quesNum = 0;
	quesDetails();
			
}

//function to print details of trivia question to page
function quesDetails(){
	console.log(quesNum);
	$('.answers').empty();


		$('.question').html(game.questions[quesNum].question);
		for (var j = 0; j < game.questions[quesNum].choices.length; j++){
			
			$('.answers').append("<p class=\"answer\">" + game.questions[quesNum].choices[j] + "</p>");
		}	
		quesTimer(game.quesTime);
		nextQues();
}

//function for question timer
function quesTimer(number){
	var quesInterval = setInterval(function(){
		number--
		$('.timer').html(number);
		if(number === 0){
		clearInterval(quesInterval);
		}
	},1000);	

}

//function to go to next question
function nextQues(){
		quesNum++
		if (quesNum >= game.questions.length) return;

		setTimeout(quesDetails, 3000);
	}

//App Display

//Initialize
initializeGame();

