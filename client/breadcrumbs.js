drawBreadcrumbs = function() {
	document.getElementById('study-up').href = '/' + FixtureNames.current + '/study';
	document.getElementById('quiz-up').href = '/' + FixtureNames.current + '/quiz';
	document.getElementById('current-question-set').innerHTML = FixtureNames[FixtureNames.current].displayName;
}