=== Open Graph Rescrape ===
Contributors: urre
Donate link: https://www.paypal.me/urbansanden
Tags: publish, open graph, rescrape, refetch, data, metadata, facebook
Requires at least: 3.0
Tested up to: 4.7.1
Stable tag: 0.2.2

Click a button in wp-admin to force an Open Graph rescrape.

== Description ==

When you share a post/page on Facebook, it scrapes the url for the Open Graph Data to determine what image/video/content to display. Facebook caches to image for you so if you need to change it, the old image will still be displayed. Probably not what you want to do. You can manually go to the Facebook Debug Tool and click "Fetch new scrape information", but this might be time consuming.

This plugin programatically forces a rescrape. Just click the button in wp-admin.

* [Github](https://github.com/urre/og-rescrape)

== Installation ==

1. Upload the `og-rescrape` folder to your `/wp-content/plugins/` directory
2. Activate the "og-rescrape" plugin in your WordPress administration interface
3. Done!

== Feedback ==

Contact me at hej@urre.me or at https://twitter.com/urre and hopefully I can do something about it.

== Frequently Asked Questions ==

This plugin is available in the following languages:

* English

== Screenshots ==

1. Button in wp-admin

== Changelog ==

= 0.2.2 =
* Bug fix for long urls. Namespace JavaScript.

= 0.2.1 =
* Minor fix

= 0.2.0 =
* Bug fixes for scrape request.

= 0.1.0 =
* First version in repository