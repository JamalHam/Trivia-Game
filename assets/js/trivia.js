var triviaQuestions = [
    {
        question: "who were the early 2000's big 3 of shounen Anime?",
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
        questionOptions:{
            a: 'He Punches with a Smile',
            b: 'He always goes plus ultra',
            c: 'All of his techniques reference the 52 states',
            d: 'SMASSSSSHHHHHH1'
        },
        answer: "b"
    },
    {
        question: "what is the common theme of All Might's Attacks",
        questionOptions:{
            a: 'He Punches with a Smile',
            b: 'He always goes plus ultra',
            c: 'All of his techniques reference the 52 states',
            d: 'SMASSSSSHHHHHH1'
        },
        answer: "b"
    },
    {
        question: "Who stole Jonathan's body (JoJo)",
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
	
	
	var h2 = document.createElement("h2");
	
	questionsList.append(h2);
	
	h2.append(triviaQuestions[i].question);
	
	
	for (var prop in triviaQuestions[i].questionOptions){
		
		if(triviaQuestions[i].questionOptions.hasOwnProperty(prop)){
			
			var li = document.createElement("li");
			
			questionsList.append(li);
			
			li.append(triviaQuestions[i].questionOptions[prop]);
			
			
		}
			
	}
	
	
}