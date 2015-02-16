/*
Template.study.helpers({
'equations': function () { return BasicIntegration.find(); }
});
*/

var getPathname = function() { return window.location.pathname.replace(/^.*[\\\/]/g, ''); }

currentQuestionSet = {};
quiz = {
	score: 0,
	answered: 0,
	accuracy: function () {
		return Math.round(this.score / this.answered * 100) + '%';
	},
	reset: function() {
		this.score = 0;
		this.answered = 0;
	}
};

Template.mainLayout.helpers({
	currentSet: getPathname()
});

Template.quiz.helpers({
	currentSet: getPathname(),
	collection: function () { 
		return Router.routes['quiz'].data();
	}
});

Template.quiz.events({
	'click #quiz #controls a' : function(e) {
		e.preventDefault;
		var total = currentQuestionSet.length;
		var randomIndex = Math.floor(Math.random() * total);
		var question = '$' + currentQuestionSet[randomIndex].integral + '$';
		var answer = '$' + currentQuestionSet[randomIndex].differential + '$';
		$('#quiz-question').html(question);
		$('#quiz-answer').html(answer);
		MathJax.Hub.Typeset();
	},
	'click #quiz #controls #correct' : function() {
		quiz.score++;
		quiz.answered++;
		$('#score #accuracy').html(quiz.accuracy());
		$('#score #total').html(quiz.answered);
	},
	'click #quiz #controls #wrong' : function() {
		quiz.answered++;
		$('#score #accuracy').html(quiz.accuracy());
		$('#score #total').html(quiz.answered);
	},
	'click #quiz #controls #reset' : function() {
		quiz.reset();
		$('#score #accuracy').html(quiz.score);
		$('#score #total').html(quiz.answered);
	}
})