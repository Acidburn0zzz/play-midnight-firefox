jQuery(function($){

var PlayMidnight = {
	init: function() {
		this.injectStyle();
		this.updateFavicon();
		this.addCredits();
	},

	injectStyle: function() {
		var style = $('<link>', {
			rel: 'stylesheet',
			type: 'text/css',
			href: self.options.stylesheetUrl
		});
		$('head').append(style);
	},

	updateFavicon: function() {
		var iconUrl = self.options.faviconUrl + '?v=' + Date.now();

		$('link[rel="SHORTCUT ICON"]').remove();
		$('head').append( $('<link>', {
			rel: 'shortcut icon',
			href: iconUrl
		}) );
	},

	addCredits: function() {
		var donateUrl = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KHH9ZJH42FF4J';
		var personalUrl = 'http://christieman.com/';

		var divider = $('<div', {
			class: 'nav-section-divider'
		});

		var header = $('<div>', {
			class: 'nav-section-header',
			text: 'PLAY MIDNIGHT - '
		}).append( $('<a>', { href: donateUrl, text: 'DONATE' }) );

		var credits = $('<ul>', { id: 'play-midnight' })
			.append( $('<li>', { class: 'nav-item-container' })
				.append( $('<a>', {
					href: personalUrl,
					text: 'By Chris Tieman'
				})));

		if ( !$('#playMidnight-credits').length )
			$('#nav').append(
				$('<div>', { id: 'playMidnight-credits', })
					.append(divider)
					.append(header)
					.append(credits));
	}
};

PlayMidnight.init();


});