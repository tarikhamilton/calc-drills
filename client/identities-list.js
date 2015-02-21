Template['identities-list'].events({
	'click #how-to-popup' : function() {
		$('#how-to-popup').slideUp();
		Session.set('hidePopup', 'true');
	}
});

Template['identities-list'].helpers({

});

Template['identities-list'].rendered = function() {
	hidden = Session.get('hidePopup');
	if (hidden === 'true') {
		document.getElementById('how-to-popup').style.display = 'none';
	}
}
