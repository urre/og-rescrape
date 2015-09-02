(function ($) {

	"use strict";

	$(function () {

		// Some basic settings
		var settings = {
			url: $('#sample-permalink').text(),
			textNormal: 'Rescrape Open Graph data',
			textSuccess: 'Success!',
			textFailed: 'Failed!'
		};

		// Add button
		$('#edit-slug-box').append('<a class="button button-small button-rescrape">'+settings.textNormal+'</a>');

		// Click to rescrape Open Graph Data
		$('.button-rescrape').on('click', function(e) {
			var _this = $(this);

			var jqxhr = $.post(
				'https://graph.facebook.com',
				{
					id: settings.url,
					scrape: true
				},
				function(response) {
					

				})
				.done(function(response) {
					_this.text(settings.textSuccess).addClass('og-rescrape-success');
					setTimeout(function() {
						_this.text(settings.textNormal).removeClass('og-rescrape-success');
					}, 2000);
				})
				.fail(function(response) {
					_this.text(settings.textFail).addClass('og-rescrape-fail');
					setTimeout(function() {
						_this.text(settings.textNormal).removeClass('og-rescrape-fail');
					}, 2000);
				})
				.always(function(response) {

				});

			});

	});
}(jQuery));