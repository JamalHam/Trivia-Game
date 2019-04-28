var correctAnswers = 0;

if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}

var triviaQuestions = [
    {
        question: "who were the early 2000's big 3 of shounen Anime?",
        questionNumber: 'q1',
        questionOptions:{
            a: 'Naruto, Dragon Ball and One Piece',
            b: 'Naruto, Dragon Ball and Yu Yu Hakusho',
            c: 'Naruto, Bleach and One Piece',
            d: 'Dragon Ball, Yu Yu Hakusho, and Slam Dunk'
        },
        answer: "c"
    },
    {
        question: "What is the name of Yusuke's ancestral fore father",
        questionNumber: 'q2',
        questionOptions:{
            a: 'Raiden',
            b: 'Raizen',
            c: 'Rayen',
            d: 'Ray-ken'
        },
        answer: "b"
    },
    {
        question: "Finish this sentence, 'His Power level its....'",
        questionNumber: 'q3',
        questionOptions:{
            a: 'Over 1000!',
            b: 'Over 9000!',
            c: 'Over the Moon',
            d: 'Over 10000'
        },
        answer: "b"
    },  
    {
        question: "what is the name of the demon fox the resides inside naruto",
        questionNumber: 'q4',
        questionOptions:{
            a: 'Saitama',
            b: 'Kyuubi!',
            c: 'Kinton',
            d: 'Kurama'
        },
        answer: "d"
    },
    {
        question: "what is the common theme of All Might's Attacks",
        questionNumber: 'q5',
        questionOptions:{
            a: 'He Punches with a Smile',
            b: 'He always goes plus ultra',
            c: 'All of his techniques reference the 52 states',
            d: 'SMASSSSSHHHHHH1'
        },
        answer: "b"
    },
    {
        question: "what is Luffy's goal",
        questionNumber: 'q6',
        questionOptions:{
            a: 'Collect the Dragon Balls',
            b: 'Become Hokage',
            c: 'Become King of the Pirates',
            d: 'Protect his friends'
        },
        answer: "b"
    },
    {
        question: "Who stole Jonathan's body (JoJo)",
        questionNumber: 'q7',
        questionOptions:{
            a: 'It was me Dio!!!!!',
            b: 'Muda Muda Muda Muda Muda Muda Muda Muda Muda Muda',
            c: 'Dio Brando',
            d: 'DIO'
        },
        answer: "a"
    },     
]

var questionsList = document.getElementById('qList');

var ulQuestionList = document.getElementById('qUl');


for( var i = 0; i < triviaQuestions.length; i++){
	
	
	var divOne = document.createElement("div");
	
	var h2 = document.createElement("h2");
	
	questionsList.append(divOne);
	
	divOne.append(h2);
	
	h2.append(triviaQuestions[i].question);
    
    
	//var h2markup = `<h2>${triviaQuestions[i].question}</h2>`
	
	
	for (var prop in triviaQuestions[i].questionOptions){
		
		if(triviaQuestions[i].questionOptions.hasOwnProperty(prop)){
			
			var li = document.createElement("li");
			
			divOne.append(li);
			
			var strOne = '<input type="radio" id="' + prop + '" name="' + triviaQuestions[i].questionNumber + '">';
    		
			var strTwo = '<label for="' + triviaQuestions[i].questionOptions[prop] + '">' + triviaQuestions[i].questionOptions[prop] + '</label>';
			
			li.innerHTML = strOne;
			
			li.innerHTML += strTwo;
			
			//li.append(triviaQuestions[i].questionOptions[prop]);
			
			
		}
			
	}
	
	
}

function quizSubmit(){
    for( var i = 0; i < triviaQuestions.length; i++){
        var qvar = triviaQuestions[i].questionNumber;
        var radios = document.getElementsByName(qvar);
        console.log(qvar);
        console.log(radios);
        
        for(var l = 0; l < radios.length; l++){
            if(radios[l].checked){
                console.log(radios[l].id + " was checked");
        }
        }
    }
    
}
