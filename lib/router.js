FixtureNames = {
	'basic-integration': BasicIntegration
}


Router.map(function() {
	this.route('home', {
		path: '/',
		layoutTemplate: 'layout'
	});
	this.route('study', {
		path: '/study/:collection', 
		template: 'study', 
		layoutTemplate: 'mainLayout',
		waitOn: function () { Meteor.subscribe('equations') },
		data: function () {
			for (fixture in FixtureNames) {
				if (this.params.collection === fixture)
					return FixtureNames[fixture].find();
			}
			//var formatted = this.params.collection.replace(/-/g, '_');
		}
	});
	collectionRandomized = [];
	this.route('quiz', {
		path: '/quiz/:collection',
		template: 'quiz', 
		layoutTemplate: 'mainLayout', 
		waitOn: function () { Meteor.subscribe('equations') },
		data: function() {
			for (fixture in FixtureNames) {
				if (this.params.collection === fixture) {
					// currentQuestionSet is in main.js.
					currentQuestionSet = FixtureNames[fixture].find().fetch();
					var randomIndex = Math.floor(Math.random() * currentQuestionSet.length);
					console.log(currentQuestionSet[randomIndex]);
					return currentQuestionSet[randomIndex];
				}
			}
		}
	});
});