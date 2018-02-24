//define variables
	//need variables to track correct and incorrect answers
	var correctAnswers=0;
	var incorrectAnswers=0;
	var guess;
	var i=0;
	var questions = [
		[
		"What was the movie The Matrix about?",
		"A. Ai taking over the world",
		"B. Math",
		"C. Sick Shades",
		"D. White rabbits",
		1
		],
		[
		"In the movie Fight Club who plays Tyler Durden?",
		"A. Edward Norton",
		"B. Brad Pitt",
		"C. All of the above",
		"D. None of the above",
		3
		],
		[
		"Does Marsellus Wallace look like a bitch?",
		"A. Yes",
		"B. No",
		"C. Who?",
		"D. What?",
		4
		],
		[
		"Would a Mass Effect movie trilogy be awesome?",
		"A. Yes",
		"B. No",
		"C. What's Mass Effect?",
		"D. Derp",
		1
		],
		[
		"Which is NOT a Disney movie?",
		"A. Lion King",
		"B. 8 mile",
		"C. Mulan",
		"D. Pocahontas",
		2
		],
		[
		"Whos a happy camper?",
		"A. Han Solo",
		"B. Hermione Granger",
		"C. Gandalf",
		"D. Patrick Bateman",
		4
		],
		[
		"What werewolf movie did Jack Nicholson star in?",
		"A. The Howling",
		"B. Wolf",
		"C. American werewolf in London",
		"D. Skinwalkers",
		2
		],
		[
		"Final Results",
		"A. Results",
		"B. Results",
		"C. Results",
		"D. Results",
		2
		],

	];
	
  var html=
  		"<h3>Incorrect:"+incorrectAnswers+"</h3>"+"<br/>"+
  		"<h3>Correct:"+correctAnswers+"</h3>"+"<br/>"+
      "<h2>"+questions[i][0]+"</h2>"+"<br/>"+
      "<p>"+questions[i][1]+"</p>"+"<br/>"+
      "<p>"+questions[i][2]+"</p>"+"<br/>"+
      "<p>"+questions[i][3]+"</p>"+"<br/>"+
      "<p>"+questions[i][4]+"</p>"
         ;
	function updateDisplay()
		{
		   var html=
		  		"<h3>Incorrect:"+incorrectAnswers+"</h3>"+"<br/>"+
		  		"<h3>Correct:"+correctAnswers+"</h3>"+"<br/>"+
		      "<h2>"+questions[i][0]+"</h2>"+"<br/>"+
		      "<p>"+questions[i][1]+"</p>"+"<br/>"+
		      "<p>"+questions[i][2]+"</p>"+"<br/>"+
		      "<p>"+questions[i][3]+"</p>"+"<br/>"+
		      "<p>"+questions[i][4]+"</p>"
		         ;  
    	document.getElementById("#game").innerHTML=html;
     	}
	
	console.log(html);

	$( document ).ready(function() {
    console.log( "ready!" );
    $(".btnReset").on("click", function(){
    	i=0;
    	incorrectAnswers=0;
    	correctAnswers=0;
    	updateDisplay();
    });
     $(".btnA").on("click", function () {
       guess=1;
    	if (guess===questions[i][5])
    	{
    		correctAnswers++
    		i++
    		updateDisplay();
    	}else{
    		incorrectAnswers++
    		i++
    		updateDisplay();
    	}
      });
      $(".btnB").on("click", function () {
       guess=2;
    	if (guess===questions[i][5])
    	{
    		correctAnswers++
    		i++
    		updateDisplay();
    	}else{
    		incorrectAnswers++
    		i++
    		updateDisplay();
    	}
      });
       $(".btnC").on("click", function () {
       guess=3;
    	if (guess===questions[i][5])
    	{
    		correctAnswers++
    		i++
    		updateDisplay();
    	}else{
    		incorrectAnswers++
    		i++
    		updateDisplay();
    	}
      });
        $(".btnD").on("click", function () {
       guess=4;
    	if (guess===questions[i][5])
    	{
    		correctAnswers++
    		i++
    		updateDisplay();
    	}else{
    		incorrectAnswers++
    		i++
    		updateDisplay();
    	}
      });
    updateDisplay();
	});

	//need dynamic html variable initialized here then loaded to a function that can be called any time we update.
	// use form and input type radio to make sure user can only select one option.
//define objects
	//try using an array of objects for storing the questions.
	//the object should have a property for the question which should be displayed as a header in our dynamic html.
	//the next four properties should be potential answers. displayed as text with a bubble next to it.
	//the last property shuld be the correct answer.
	//reference stopwatch activity to learn to build objects and functions that affect objects.
//define functions
	// need a function for updating html
	//need a function for waiting to take user input then running that input against the object.
	// user input will be selecting one bubble of four and pressing the button to allow the loop to finish and the new question to com up.
//define process
	//the process wil include an overall loop that iterates through the array of objects above. there will be nested
	//functionality that waits for user input and then checks it against the properties in the object.
	// after goin through the lenght of the question object an end results page should populate in the div that controls the disply.