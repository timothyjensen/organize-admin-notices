;( function( $ ) {
	'use strict';

	var $noticesWrapper;

	/**
	 * Wrapps all elements found between the opening and closing elements. Aborts
	 * if the opening and/or closing elements are not found.
	 *
	 * @param {string} wrapperClass
	 */
	function renderNoticesWrapper( wrapperClass ) {
		var $open  = $( '#organize-admin-notices--open' );
		var $close = $( '#organize-admin-notices--close' );

		if ( ! $open.length || ! $close.length ) {
			return;
		}

		$open.nextUntil( $close ).wrapAll( '<div class="' + wrapperClass + '" />' );

		$open.remove();
		$close.remove();
	}

	function repositionNotices() {
		var notices = $( 'div.updated, div.error, div.notice' ).not( '.inline, .below-h2' );

		notices.detach().appendTo( $noticesWrapper );
	}

	function maybeRenderNoticesToggle() {
		var notices = $noticesWrapper.children();

		notices = notices.filter( function( index, notice ) {
			return ! $( notice ).is( ':empty' );
		} );

		if ( ! notices.length ) {
			return;
		}

		$noticesWrapper.prepend( '<button type="button" class="button toggle" data-notice-count="' + notices.length + '">Toggle Notices</button><div class="clear"></div>' );

		$( 'button.toggle', $noticesWrapper ).on( 'click', function() {
			$noticesWrapper.toggleClass( 'active' );
		} );
	}

	function init() {
		var wrapperClass = 'organize-admin-notices';

		renderNoticesWrapper( wrapperClass );

		$noticesWrapper = $( '.' + wrapperClass );

		if ( ! $noticesWrapper.length ) {
			return;
		}

		repositionNotices();
		maybeRenderNoticesToggle();
	}

	$( document ).ready( init );
} )( jQuery );
