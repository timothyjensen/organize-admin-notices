;( function( $ ) {
	'use strict';

	var $noticesWrapper;

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

		$( '#screen-meta-links' ).prepend( '<button type="button" class="button organize-admin-notices__toggle" id="organize-admin-notices__toggle" aria-label="Toggle visibility of admin notices" data-notice-count="' + notices.length + '">Notices</button>' );

		$( '#organize-admin-notices__toggle' ).on( 'click', function() {
			$noticesWrapper.toggleClass( 'active' );
		} );
	}

	function init() {
		$noticesWrapper = $( '#organize-admin-notices' );

		if ( ! $noticesWrapper.length ) {
			return;
		}

		repositionNotices();
		maybeRenderNoticesToggle();
	}

	$( document ).ready( init );
} )( jQuery );
