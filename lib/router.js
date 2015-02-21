Router.map(function() {
	this.route('home', {
		path: '/',
		template: 'identities-list',
		layoutTemplate: 'mainLayout'
	});
	this.route('study', {
		path: '/:collection/study', 
		template: 'study', 
		layoutTemplate: 'mainLayout',
		waitOn: function () { Meteor.subscribe(this.params.collection) },
		data: function () {
			for (fixture in FixtureNames) {
				if (this.params.collection === fixture) {
					console.log(fixture);
					FixtureNames.current = fixture;
					return FixtureNames[fixture].collection.find();
				}
			}
			//var formatted = this.params.collection.replace(/-/g, '_');
		}
	});
	collectionRandomized = [];
	this.route('quiz', {
		path: '/:collection/quiz',
		template: 'quiz', 
		layoutTemplate: 'mainLayout', 
		waitOn: function () { Meteor.subscribe(this.params.collection) },
		data: function() {
			for (fixture in FixtureNames) {
				if (this.params.collection === fixture) {
					// currentQuestionSet is in main.js.
					console.log(fixture);
					FixtureNames.current = fixture;
					currentQuestionSet = FixtureNames[fixture].collection.find().fetch();
					var randomIndex = Math.floor(Math.random() * currentQuestionSet.length);
					return currentQuestionSet[randomIndex];
				}
			}
		}
	});
});