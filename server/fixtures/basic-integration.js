if (BasicIntegration.find().count() === 0) {
	BasicIntegration.insert({
		integral: '\\int du',
		differential: 'u + C'
	});
	BasicIntegration.insert({
		integral: '\\int u^n du',
		differential: '\\frac{u^{n+1}}{n+1} + C, n \\neq 1'
	});
	BasicIntegration.insert({
		integral: '\\int \\frac{du}{u}',
		differential: '\\ln|u| + C'
	});
	BasicIntegration.insert({
		integral: '\\int e^u du',
		differential: 'e^u + C'
	});
	BasicIntegration.insert({
		integral: '\\int a^u du',
		differential: '(\\frac{1}{\\ln a})a^u + C'
	});
	BasicIntegration.insert({
		integral: '\\int \\sin u du',
		differential: '-\\cos u + C'
	});
	BasicIntegration.insert({
		integral: '\\int \\cos u du',
		differential: '\\sin u + C'
	});
	BasicIntegration.insert({
		integral: '\\int \\tan u du',
		differential: '-\\ln|\\cos u| + C'
	});
	BasicIntegration.insert({
		integral: '\\int \\cot u du',
		differential: '\\ln|\\sin u| + C'
	});
	BasicIntegration.insert({
		integral: '\\int \\sec u du',
		differential: '\\ln|\\sec u + \\tan u| + C'
	});
	BasicIntegration.insert({
		integral: '\\int \\csc u du',
		differential: '-\\ln|\\csc u + \\cot u| + C'
	});
	BasicIntegration.insert({
		integral: '\\int \\sec^2 u du',
		differential: '\\tan u + C'
	});
	BasicIntegration.insert({
		integral: '\\int \\csc^2 u du',
		differential: '-\\cot u + C'
	});
	BasicIntegration.insert({
		integral: '\\int \\sec u \\tan u du',
		differential: '\\sec u + C'
	});
	BasicIntegration.insert({
		integral: '\\int \\csc u \\cot u du',
		differential: '-\\csc u + C'
	});
	BasicIntegration.insert({
		integral: '\\int \\frac{du}{\\sqrt{a^2-u^2}}',
		differential: '\\arcsin{\\frac{u}{a}}+ C'
	});
	BasicIntegration.insert({
		integral: '\\int \\frac{du}{\\sqrt{a^2+u^2}}',
		differential: '\\frac{1}{a}\\arctan{\\frac{u}{a}}+ C'
	});
	BasicIntegration.insert({
		integral: '\\int \\frac{du}{u\\sqrt{u^2-a^2}}',
		differential: '\\frac{1}{a} \\arcsec \\frac{|u|}{a}+ C'
	});
}

Meteor.publish('equations', function() {
	Counts.publish(this, 'equationsTotal', BasicIntegration.find());
	return BasicIntegration.find();
});