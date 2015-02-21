if (calcDifferentiationInverseTrig.find().count() === 0) {
	calcDifferentiationInverseTrig.insert({
		question: '\\frac{d}{dx}[\\arcsin{u}]',
		answer: '\\frac{u\'}{\\sqrt{1-u^2}}'
	});
	calcDifferentiationInverseTrig.insert({
		question: '\\frac{d}{dx}[\\arccos{u}]',
		answer: '\\frac{-u\'}{\\sqrt{1-u^2}}'
	});
	calcDifferentiationInverseTrig.insert({
		question: '\\frac{d}{dx}[\\arctan{u}]',
		answer: '\\frac{u\'}{1+u^2}'
	});
		
}

Meteor.publish('calc-differentiation-inverse-trig', function() {
	return calcDifferentiationInverseTrig.find();
});