<?php
/*
* Plugin Name: Open Graph Rescrape
* Plugin URI: http://github.com/urre/ogrescrape
* Description: This plugin programatically forces a Open Graph rescrape. Just click the button in wp-admin.
* Version: 0.2.2
* Author: Urban Sanden
* Author URI: http://urre.me
* License: GPL2
*/

/*  Copyright 2017 Urban Sanden (email: hej@urre.me)

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

class Ogrescrape {

    function __construct() {

        # Register styles and scripts
        if (is_admin()) {
          add_action( 'admin_print_styles', array( $this, 'register_admin_styles' ) );
          add_action( 'admin_enqueue_scripts', array( $this, 'register_admin_scripts' ) );
        } else {
          add_action( 'wp_print_styles', array( $this, 'register_admin_styles' ) );
          add_action( 'wp_enqueue_scripts', array( $this, 'register_admin_scripts' ) );
        }

        # Get plugin paths, support both Must Use Plugins and standard plugins
        $this->constants();

        # Load plugin text domain
        add_action( 'init', array( $this, 'plugin_textdomain' ) );

    }


    # Text domain for translations
    public function plugin_textdomain() {
        $domain = 'ogrescrape';
        $locale = apply_filters( 'plugin_locale', get_locale(), $domain );
        load_textdomain( $domain, WP_LANG_DIR.'/'.$domain.'/'.$domain.'-'.$locale.'.mo' );
        load_plugin_textdomain( $domain, FALSE, dirname( plugin_basename( __FILE__ ) ) . '/lang/' );
    }

    private function constants() {
        if ( ! defined( 'OGRESCRAPE_PLUGIN_URL' ) ) {
            $plugin_url = plugin_dir_url( __FILE__ );
            define( 'OGRESCRAPE_PLUGIN_URL', $plugin_url );
        }

        if ( ! defined( 'OGRESCRAPE_PLUGIN_URL' ) ) {
            $plugin_url = plugin_dir_url( __FILE__ );
            define( 'OGRESCRAPE_PLUGIN_URL', $plugin_url );
        }
    }

    public function register_admin_styles() {
        wp_enqueue_style( 'ogrescrape-plugin-styles', OGRESCRAPE_PLUGIN_URL . 'css/og-rescrape.admin.css' );
    }

    public function register_admin_scripts($hook) {

        wp_enqueue_script( 'ogrescrape-admin-script', OGRESCRAPE_PLUGIN_URL . 'js/og-rescrape.admin.js', array('jquery') );

        # Localized strings exposed to Javascript
        wp_localize_script( 'ogrescrape-admin-script', 'langstrings', array(
            'rescrape' => __( 'Rescrape Open Graph Data', 'ogrescrape' ),
        ));
    }

}

$ogrescrape = new Ogrescrape();