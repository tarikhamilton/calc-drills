if (BasicIntegration.find().count() === 0) {
	BasicIntegration.insert({
		question: '\\int du',
		answer: 'u + C'
	});
	BasicIntegration.insert({
		question: '\\int u^n du',
		answer: '\\frac{u^{n+1}}{n+1} + C, n \\neq 1'
	});
	BasicIntegration.insert({
		question: '\\int \\frac{du}{u}',
		answer: '\\ln|u| + C'
	});
	BasicIntegration.insert({
		question: '\\int e^u du',
		answer: 'e^u + C'
	});
	BasicIntegration.insert({
		question: '\\int a^u du',
		answer: '(\\frac{1}{\\ln a})a^u + C'
	});
	BasicIntegration.insert({
		question: '\\int \\sin u du',
		answer: '-\\cos u + C'
	});
	BasicIntegration.insert({
		question: '\\int \\cos u du',
		answer: '\\sin u + C'
	});
	BasicIntegration.insert({
		question: '\\int \\tan u du',
		answer: '-\\ln|\\cos u| + C'
	});
	BasicIntegration.insert({
		question: '\\int \\cot u du',
		answer: '\\ln|\\sin u| + C'
	});
	BasicIntegration.insert({
		question: '\\int \\sec u du',
		answer: '\\ln|\\sec u + \\tan u| + C'
	});
	BasicIntegration.insert({
		question: '\\int \\csc u du',
		answer: '-\\ln|\\csc u + \\cot u| + C'
	});
	BasicIntegration.insert({
		question: '\\int \\sec^2 u du',
		answer: '\\tan u + C'
	});
	BasicIntegration.insert({
		question: '\\int \\csc^2 u du',
		answer: '-\\cot u + C'
	});
	BasicIntegration.insert({
		question: '\\int \\sec u \\tan u du',
		answer: '\\sec u + C'
	});
	BasicIntegration.insert({
		question: '\\int \\csc u \\cot u du',
		answer: '-\\csc u + C'
	});
	BasicIntegration.insert({
		question: '\\int \\frac{du}{\\sqrt{a^2-u^2}}',
		answer: '\\arcsin{\\frac{u}{a}}+ C'
	});
	BasicIntegration.insert({
		question: '\\int \\frac{du}{\\sqrt{a^2+u^2}}',
		answer: '\\frac{1}{a}\\arctan{\\frac{u}{a}}+ C'
	});
	BasicIntegration.insert({
		question: '\\int \\frac{du}{u\\sqrt{u^2-a^2}}',
		answer: '\\frac{1}{a} \\arcsec{\\frac{|u|}{a}+ C'
	});
}

Meteor.publish('basic-integration', function() {
	return BasicIntegration.find();
});