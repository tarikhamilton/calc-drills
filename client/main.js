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
	document.getElementById('quiz-answer').className = ' ';
	var total = currentQuestionSet.length;
	var randomIndex = Math.floor(Math.random() * total);
	var question = '$' + currentQuestionSet[randomIndex].question + '$';
	var answer = '$' + currentQuestionSet[randomIndex].answer + '$';
	document.getElementById('quiz-question').innerHTML = question;
	document.getElementById('quiz-answer').innerHTML = answer;
	MathJax.Hub.Typeset();
	this.buttons.reset();
	this.update();
}

quiz.buttons = {
	check: function() {
		document.getElementById('quiz-answer').className = 'display-toggle-answer';
		document.getElementById('quiz-button-check').className = ' ';
		document.getElementById('quiz-button-correct').className = 'display-toggle';
		document.getElementById('quiz-button-wrong').className = 'display-toggle';
	},
	reset: function() {
		document.getElementById('quiz-answer').className = ' ';
		document.getElementById('quiz-button-check').className = 'display-toggle';
		document.getElementById('quiz-button-correct').className = ' ';
		document.getElementById('quiz-button-wrong').className = ' ';
		document.getElementById('quiz-button-reset').className = 'display-toggle';
	}
}

Template.quiz.rendered = function() {
	drawBreadcrumbs();
	quiz.buttons.reset();
};

Template.study.rendered = function() {
	drawBreadcrumbs();
}

Template.mainLayout.rendered = function() {
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