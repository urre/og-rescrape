# OG Rescrape

When you share a post/page on Facebook, it scrapes the url for the Open Graph Data to determine what image/video/content to display. Facebook caches to image for you so if you need to change it, the old image will still be displayed. Probably not what you want to do. You can manually go to the [](https://developers.facebook.com/tools/debug/) and click "Fetch new scrape information", but this might be time consuming.

![](https://cloud.githubusercontent.com/assets/307676/9641358/9d01fb4e-51b6-11e5-9415-f70ef61c93b2.png)

This plugin programatically forces a rescrape. Click the button in wp-admin.

## Install from [WordPress Plugin directory](https://wordpress.org/plugins/ogrescrape/)
1. Install plugin from the WordPress Plugin directory (coming soon..)

## Install via [WordPress Packagist](http://wpackagist.org/)
1. Add ``"wpackagist-plugin/ogrescrape": "*"`` to your composer.json
3. Run ``composer.phar update``
4. OG Rescrape are installed to ``wp-content/plugins/``

## Install directly via Composer
	
	composer require urre/ogrescrape

## Install manually
1. Download [zip](https://github.com/urre/ogrescrape/archive/master.zip) and extract
2. Rename the folder from `ogrescrape-master` to `ogrescrape`
3. Upload the plugin to your plugins directory
4. Activate the plugin

## Uninstall
1. Deactivate plugin

## Translations
OG Rescrape is available in:

+ English

## Todo
- [ ] Add spinner inside button
- [ ] Show link to Linter

## Changelog
+ 0.1.0: First version in repo