(function ($) {

	"use strict";

	$(function () {

		// Some basic settings
		var url = $('#sample-permalink').text();
		var textNormal = 'Rescrape Open Graph data'
		var textSuccess = 'Success!'
		var textFailed = 'Failed!'

		// Add button
		$('#edit-slug-box').append('<a class="button button-small button-rescrape">'+textNormal+'</a>');

		// Click to rescrape Open Graph Data
		$('.button-rescrape').on('click', function(e) {
			var _this = $(this);


			var jqxhr = $.post(
				'https://graph.facebook.com',
				{
					id: url,
					scrape: true
				},
				function(response) {
					

				})
				.done(function(response) {
					_this.text(textSuccess).addClass('ogrefetch-success');
					setTimeout(function() {
						_this.text(textNormal).removeClass('ogrefetch-success');
					}, 2000);
				})
				.fail(function(response) {
					_this.text(textFail).addClass('ogrefetch-fail');
					setTimeout(function() {
						_this.text(textNormal).removeClass('ogrefetch-fail');
					}, 2000);
				})
				.always(function(response) {

				});

			});

	});
}(jQuery));