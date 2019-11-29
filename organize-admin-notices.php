<?php
/**
 * Organize Admin Notices
 *
 * @package     TimJensen\OrganizeAdminNotices
 * @author      Tim Jensen <tim@timjensen.us>
 * @license     GPL-2.0-or-later
 *
 * @wordpress-plugin
 *
 * Plugin Name: Organize Admin Notices
 * Plugin URI:  https://github.com/timothyjensen/organize-admin-notices
 * Description: Organizes admin notices for a cleaner administrative experience.
 * Version:     0.1.0
 * Author:      Tim Jensen
 * Author URI:  https://www.timjensen.us
 * Text Domain: organize-admin-notices
 * License:     GPL-2.0-or-later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

declare( strict_types = 1 );

namespace TimJensen\OrganizeAdminNotices;

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

if ( ! defined( 'ORGANIZE_ADMIN_NOTICES' ) ) {
	define( 'ORGANIZE_ADMIN_NOTICES', __FILE__ );
}

add_action( 'admin_enqueue_scripts', __NAMESPACE__ . '\\enqueue_assets' );
/**
 * Enqueues the required assets.
 */
function enqueue_assets() {
	wp_enqueue_style(
		'organize-admin-notices-css',
		plugins_url( 'assets/css/style.css', ORGANIZE_ADMIN_NOTICES ),
		[],
		'0.1.0'
	);

	wp_enqueue_script(
		'organize-admin-notices',
		plugins_url( 'assets/js/organize-admin-notices.js', ORGANIZE_ADMIN_NOTICES ),
		[ 'jquery', 'common' ],
		'0.1.0',
		true
	);
}

add_action( 'admin_notices', __NAMESPACE__ . '\\wrap_notices_open', PHP_INT_MIN );
/**
 * Renders the opening tag for the notices wrapper.
 */
function wrap_notices_open() {
	echo '<div class="organize-admin-notices">';
}

add_action( 'admin_notices', __NAMESPACE__ . '\\wrap_notices_close', PHP_INT_MAX );
/**
 * Renders the closing tag for the notices wrapper.
 */
function wrap_notices_close() {
	echo '</div>';
}
