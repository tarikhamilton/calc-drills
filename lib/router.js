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
					var total = Counts.get('equationsTotal');
					var n = Math.floor(Math.random() * total);
					var collection = FixtureNames[fixture].find().limit(-1).skip(n).next();
					console.log(collection);
					//return collection;
					/* A delay because the collection gets updated multiple times (7, 13, then  18 (correct amount) and Meteor recalls the function with each update. Seems safe for now. That might cause duplications in the array i'm going to create for the random collection */
					setTimeout( function () {
						collection.forEach(function (element, index, array) {
							collectionRandomized.push(element);
						});
					}, 500);
				}
			}
			var random = Math.floor(Math.random() * collectionRandomized.length);
			return collectionRandomized[random];
		}
	});
});