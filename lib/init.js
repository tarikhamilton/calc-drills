BasicIntegration = new Mongo.Collection('basic_integration');
TrigReciprocalIdentities = new Mongo.Collection('trig_reciprocal_identities');
calcDifferentiationInverseTrig = new Mongo.Collection('calc_differentiation_inverse_trig');

FixtureNames = {
	current: '',
	'basic-integration': {
		displayName: 'Basic Integration',
		collection: BasicIntegration,
		category: 'calculus'
	},
	'trig-reciprocal-identities': {
		displayName: 'Reciprocal Identities',
		collection: TrigReciprocalIdentities,
		category: 'trigonometry'
	},
	'calc-differentiation-inverse-trig': {
		displayName: 'Inverse Trig Differentials',
		collection: calcDifferentiationInverseTrig,
		category: 'calculus'
	}

}

getPathname = function() { return window.location.pathname.replace(/^.*[\\\/]/g, ''); };

