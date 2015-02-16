/*
Template.study.helpers({
'equations': function () { return BasicIntegration.find(); }
});
*/
Template.mainLayout.helpers({
	currentSet: function() { return window.location.pathname.replace(/^.*[\\\/]/g, ''); }
});

Template.quiz.helpers({
	collection: function () { 
		return Router.routes['quiz'].data();
	}
});

