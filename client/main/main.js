getPathname = function() { return window.location.pathname.replace(/^.*[\\\/]/g, ''); }

currentQuestionSet = {};
quiz = {
	score: 0,
	answered: 0,
	accuracy: function () {
		if (this.answered != 0)
			return Math.round(this.score / this.answered * 100) + '%';
		else
			return '---%';
	},
	reset: function() {
		this.score = 0;
		this.answered = 0;
		document.getElementById('quiz-score-accuracy').innerHTML = '---%';
		document.getElementById('quiz-score-total').innerHTML = 0;
	},
	update: function() {
		document.getElementById('quiz-score-accuracy').innerHTML = this.accuracy();
		document.getElementById('quiz-score-total').innerHTML = this.answered;
	}
};

quiz.newQuestion = function() { 
	document.getElementById('quiz-answer').style.display = 'none';
	var total = currentQuestionSet.length;
	var randomIndex = Math.floor(Math.random() * total);
	var question = '$' + currentQuestionSet[randomIndex].integral + '$';
	var answer = '$' + currentQuestionSet[randomIndex].differential + '$';
	document.getElementById('quiz-question').innerHTML = question;
	document.getElementById('quiz-answer').innerHTML = answer;
	MathJax.Hub.Typeset();
	this.buttons.reset();
	this.update();
}

quiz.buttons = {
	check: function() {
		document.getElementById('quiz-answer').style.display = 'inline';
		document.getElementById('quiz-button-check').style.display = 'none';
		document.getElementById('quiz-button-correct').style.display = 'inline';
		document.getElementById('quiz-button-wrong').style.display = 'inline';
	},
	reset: function() {
		document.getElementById('quiz-answer').style.display = 'none';
		document.getElementById('quiz-button-check').style.display = 'inline';
		document.getElementById('quiz-button-correct').style.display = 'none';
		document.getElementById('quiz-button-wrong').style.display = 'none';
	}
}

Template.mainLayout.helpers({
	currentSet: getPathname()
});

Template.study.helpers({
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
	},
	'click #quiz-button-check' : function() {
		quiz.buttons.check();
	},
	'click #quiz-button-correct' : function() {
		quiz.score++;
		quiz.answered++;
		quiz.newQuestion();
	},
	'click #quiz-button-wrong' : function() {
		quiz.answered++;
		quiz.newQuestion();
	},
	'click #quiz-button-reset' : function() {
		quiz.reset();
		quiz.newQuestion();
	}
})