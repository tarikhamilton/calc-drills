if (TrigReciprocalIdentities.find().count() === 0) {
	TrigReciprocalIdentities.insert({
		question: '\\sin\\theta',
		answer: '\\frac{1}{\\csc\\theta}'
	});
	TrigReciprocalIdentities.insert({
		question: '\\cos\\theta',
		answer: '\\frac{1}{\\sec\\theta}'
	});
	TrigReciprocalIdentities.insert({
		question: '\\tan\\theta',
		answer: '\\frac{1}{\\cot\\theta}'
	});
	TrigReciprocalIdentities.insert({
		question: '\\csc\\theta',
		answer: '\\frac{1}{\\sin\\theta}'
	});
	TrigReciprocalIdentities.insert({
		question: '\\sec\\theta',
		answer: '\\frac{1}{\\cos\\theta}'
	});
	TrigReciprocalIdentities.insert({
		question: '\\cot\\theta',
		answer: '\\frac{1}{\\tan\\theta}'
	});
}

Meteor.publish('trig-reciprocal-identities', function() {
	return TrigReciprocalIdentities.find();
});