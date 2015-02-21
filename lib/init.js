BasicIntegration = new Mongo.Collection('basic_integration');
TrigReciprocalIdentities = new Mongo.Collection('trig_reciprocal_identities');

FixtureNames = {
	current: '',
	'basic-integration': {
		displayName: 'Basic Integration',
		collection: BasicIntegration
	},
	'trig-reciprocal-identities': {
		displayName: 'Reciprocal Identities',
		collection: TrigReciprocalIdentities
	}
}

getPathname = function() { return window.location.pathname.replace(/^.*[\\\/]/g, ''); };

