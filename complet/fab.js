//console.log(window.location);
//game details
var question = document.getElementById("question");
var answer1 = document.getElementById("q1");
var answer2 = document.getElementById("q2");
var answer3 = document.getElementById("q3");
var fish = document.getElementsByClassName("fish");
var title = document.getElementById("title");
var scoreP = document.getElementById("score");
var stage = 0;
var hook = document.getElementsByClassName("hook")[0];
var level = 1;
var quizPerLevel = 5;
document.getElementById("level").innerHTML = "Level "+level;

var answers = [answer1,answer2,answer3];

var next = document.getElementById("next");
var nextt = document.getElementById("nextt"); //console.log("acc",next,nextt);
var score = 0;

var cursor = document.getElementById("cursor");


//game storage
function gameStorage(score) {
	//get username
	let username = window.location.search.split("=")[1];
	if ('localStorage' in window && window['localStorage'] !== null) {
				//use localStorage object to store data
        localStorage.setItem(username,score);
        console.log("score is; ",score);
        window.location.href="http://localhost/game/complet/game.php?score="+score+"&username="+username;
        console.log(localStorage.theorix);
	} else {
		alert('Cannot store user preferences as your browser do not support local storage');
	}
}

setInterval(function(){ console.log("running")
  if(cursor.style.opacity === "0") {
    cursor.style.opacity = "1";
  }
  else cursor.style.opacity = "0";
  cursor.style.transition = "3s";
},3000)

var gameStates = [
  new gameState(`Which is a secure URL?`,
   [`https://123.56:8080/home <p class="tip">Never trust URLs with number addresses</p>`,
   `http://facebook.com <p class="tip">The URL does not have a secure protocol</p>`,
   `https://facebook.com <p class="tip">This URL has an https URL which means it is secured. The name of the web page is also familiar</p>`
 ],3),
  new gameState(`Which of these is an authentic URL?`,[
  `https://tweeter.com<p class="tip">This domain does not exist</p>`,
  `https://twitter.com <p class="tip">This is correct. It uses a secure protocol and the website is fairly known</p>`,
  `http://twitter.com <p class="tip">It does not use a secured protocol</p>`],2),
  new gameState(`Which of these URL have proper domain naming?`,[
  `https://twitter.facebook.com<p class="tip">THis shows two different websites and this is highly impossibble.</p>`,
  `https://blog.pusher.com <p class="tip">This would obviously be a blog sub domain of pusher.com.</p>`,
  `https://facebook.instagram.com <p class="tip">THis shows two different websites and this is highly impossibble.</p>`],2),
  new gameState(`If you receive an email that looks like that of your bank asking for your card details,
    should you provide such information?`,[`No<p class="tip">Correct!</p>`,
  `Yes <p class="tip">Even Banks recommend that you dont leak your card details</p>`,
  `Go to the bank and confirm<p class="tip">THis can still be correct but, no need to waste you time doing this.</p>`],1),
  new gameState(`Most Malware programs gather information that leads to loss of privacy
    how can you generally be protected from this?`,[`Close Window<p class="tip">ANSWER TIP11</p>`,
  `Never Use you computer <p class="tip">You can still use your computer</p>`,
  `Anti Virus program <p class="tip">Anti viruses help to check your system against spywares and items alike</p>`],3),
  new gameState(`The fraudulent practice of sending emails purporting to be from reputable companies in order
    to induce individuals to reveal personal information, such as passwords and credit card numbers?`,[`Phishing<p class="tip">Yes this is it</p>`,
  `Pheeshing <p class="tip">There is no word like this</p>`,
  `Cyber phish <p class="tip">No word like this too</p>`],1)
];

function gameState(question,answerList,correctNo) {
  this.question = question;
  this.answers = answerList;
  this.correctNo = correctNo;
}

function nexxt(){ console.log("stage:",stage);
  if(stage < gameStates.length)
	{
		if(((stage)%quizPerLevel === 0) && stage > 0) {
			level++;
			document.getElementById("level").innerHTML = "Level "+level;
		}

		nextQuiz(gameStates[stage]);
	}
  else {
    //display score
    scoreP.innerHTML = "You scored "+score;
    scoreP.style.display = "block";
    scoreP.classList.add("gotIt");
    scoreP.style.textAlign = "center";
    title.style.display = "none";
    //store score in db
    gameStorage(score);
    answer.style.display = "none";


    //gameStates[stage-1].question.style.display = "none";

    //document.getElementById("replay").style.display = "block";
    //document.getElementById("replay").addEventListener("click",replay);
  }
}

function nextQuiz(quizObj) {
  question.innerHTML = quizObj.question;
  hook.style.display = "none";
  for(let i = 0; i < answers.length; i++) {
    answers[i].innerHTML = quizObj.answers[i];

  }

  //set the correct answer
  answers.forEach(function(a){ //console.log(a);
    a.classList.remove("moveLeft");
    a.classList.remove("gotIt");
    a.classList.remove("notGotIt");
    a.classList.add("init");
		//console.log("Quiz:",quizObj.answers[quizObj.correctNo-1]);
		//console.log("current:",a.innerHTML);
    if(a.innerHTML == quizObj.answers[quizObj.correctNo-1])
    { console.log("dddd");
      //remove prev correct class
      var tmp = document.getElementsByClassName("correct");
      tmp[0].classList.remove("correct");

      //set the current correct answer
      a.classList.add("correct");
    }

    //reset fish
    fish[0].style.opacity = "0.0";
    fish[0].classList.remove("fishMove");
    fish[0].classList.remove("fishMove2");

  });

  //set title
  title.innerHTML = "Question "+(stage+1);
   stage++;

}


//add the click event to the answers
answers.forEach(function(answer){
  answer.addEventListener("click",function(){
    console.log(answer);

    correctAns = document.getElementsByClassName("correct"); //console.log(correctAns);
    //correctAns = document.getElementById("correct");
    if(answer === correctAns[0]) { score++;
      answer.classList.remove("init");
      answer.classList.add("gotIt");
      hook.style.display = 'inline';
      answers.forEach(function(a){
        if(a !== answer) {
          a.classList.remove("init");
          a.classList.add("moveLeft"); console.log(fish[0])
          fish[0].style.opacity = "1.0";
          fish[0].classList.add("fishMove");

        }
      })
    }
    else {

      answer.classList.remove("init");
      answer.classList.add("notGotIt");
      hook.style.display = 'inline'; console.log("hook",hook);
      answers.forEach(function(a){
        if(a !== answer) {
          a.classList.remove("init");
          a.classList.add("moveLeft"); //console.log(fish[0])
          fish[0].style.opacity = "1.0";
          fish[0].classList.add("fishMove2");

        }
      });
    }


		let tips = document.getElementsByClassName("tip");
		for(let i = 0; i < tips.length; i++ ) tips[i].style.display = "block";

    next.removeEventListener("click",nexxt,false);

    //next quiz
    next.addEventListener("click",nexxt);

  });
});

//restart function
function replay() {
  stage = 0;
  scoreP.style.display = "none";
  document.getElementById("replay").style.display = "none";
  nextQuiz(gameStates[stage]);
}

var next = document.getElementById("next");
var nextt = document.getElementById("nextt");

nextQuiz(gameStates[stage]);
