;( function( $ ) {
	'use strict';

	var $noticesWrapper;

	/**
	 * Wraps all elements found between the opening and closing elements. Aborts
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

		$open.nextUntil( $close ).addBack().wrapAll( '<div class="' + wrapperClass + '" />' );

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

		$( '#screen-meta-links' ).prepend( '<button type="button" class="button organize-admin-notices__toggle" id="organize-admin-notices__toggle" data-notice-count="' + notices.length + '">Notices</button>' );

		$( '#organize-admin-notices__toggle' ).on( 'click', function() {
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
