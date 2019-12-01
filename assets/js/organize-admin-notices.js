;( function( $ ) {
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

		$noticesWrapper.prepend( '<button type="button" class="button toggle" data-notice-count="' + notices.length + '">Toggle Notices</button><div class="clear"></div>' );

		$( 'button.toggle', $noticesWrapper ).on( 'click', function() {
			$noticesWrapper.toggleClass( 'active' );
		} );
	}

	function init() {
		$noticesWrapper = $( '.organize-admin-notices' );

		repositionNotices();
		maybeRenderNoticesToggle();
	}

	$( document ).ready( init );
} )( jQuery );
