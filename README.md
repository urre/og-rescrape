# Open Graph Rescrape

When you share a post/page on Facebook, it scrapes the url for the Open Graph Data to determine what image/video/content to display. Facebook caches the image/data for you so if you need to change it, the old image will still be displayed. Probably not what you want to do. You can manually go to the [Debugger](https://developers.facebook.com/tools/debug/) and click "Fetch new scrape information", but this might be a bit time consuming.

![](https://cloud.githubusercontent.com/assets/307676/9838116/e70376e0-5a54-11e5-8c78-5b322145a0fd.png)

This plugin programatically forces a rescrape. Just click the button in wp-admin.

## Install from WordPress Plugin directory
1. Install plugin from the [WordPress Plugin directory](https://wordpress.org/plugins/open-graph-rescrape/)

## Install via [WordPress Packagist](http://wpackagist.org/)
1. Add ``"wpackagist-plugin/og-rescrape": "*"`` to your composer.json
3. Run ``composer.phar update``
4. OG Rescrape are installed to ``wp-content/plugins/``

## Install directly via Composer
	
	composer require urre/og-rescrape

## Install manually
1. Download [zip](https://github.com/urre/og-rescrape/archive/master.zip) and extract
2. Rename the folder from `og-rescrape-master` to `og-rescrape`
3. Upload the plugin to your plugins directory
4. Activate the plugin

## Uninstall
1. Deactivate plugin

## Translations
OG Rescrape is available in:

+ English

## Todo
- [x] Show link to Debugger
- [ ] Add spinner inside button
- [ ] Provide language translation

## Changelog
+ 0.2.1: Minor patch
+ 0.2.0: Bug fix for the scrape request
+ 0.1.0: First version in repo