/*
Template.study.helpers({
'equations': function () { return BasicIntegration.find(); }
});
*/

var getPathname = function() { return window.location.pathname.replace(/^.*[\\\/]/g, ''); }

currentQuestionSet = {};

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
	'click #quiz-controls a' : function(e) {
		e.preventDefault;
		var total = currentQuestionSet.length;
		var randomIndex = Math.floor(Math.random() * total);
		var question = '$' + currentQuestionSet[randomIndex].integral + '$';
		var answer = '$' + currentQuestionSet[randomIndex].differential + '$';
		$('#quiz-question').html(question);
		$('#quiz-answer').html(answer);
		MathJax.Hub.Typeset();
	}
})