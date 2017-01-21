( function($) {

'use strict';

var OGRescrape = {

  settings: {
    textNormal: 'Rescrape Open Graph data',
    textSuccess: 'Success!',
    textFailed: 'Failed!'
  },

  init: function() {

    this.addButton();
    this.rescrape();
  },

  addButton: function() {
    if (window.location.href.indexOf("post-new") === -1) {
      $('#edit-slug-box').append('<a class="button button-small button-rescrape">' + OGRescrape.settings.textNormal + '</a><a class="og-rescrape-link" target="_blank" href="https://developers.facebook.com/tools/debug/og/object?q=' + $('#sample-permalink > a').attr('href') + '">Debugger</a>');
    }
  },

  rescrape: function() {
    $('.button-rescrape').on('click', function(event) {
      event.preventDefault();
      var _this = $(this);
      var jqxhr = $.post(
        'https://graph.facebook.com/?id=' + $('#sample-permalink > a').attr('href') + '&scrape=true', function(response) {})
        .done(function(response) {
          _this.text(OGRescrape.settings.textSuccess).addClass('og-rescrape-success');
          setTimeout(function() {
            _this.text(OGRescrape.settings.textNormal).removeClass('og-rescrape-success');
          }, 2000);
        })
        .fail(function(response) {
          _this.text(OGRescrape.settings.textFail).addClass('og-rescrape-fail');
          setTimeout(function() {
            _this.text(OGRescrape.settings.textNormal).removeClass('og-rescrape-fail');
          }, 2000);
        })
    });
  }

}

$(function() {
  OGRescrape.init();
});

} )( jQuery);

