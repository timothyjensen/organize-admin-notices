;(function( $ ) {

	function repositionNotices() {
		var notices = $( 'div.updated, div.error, div.notice' ).not( '.inline, .below-h2' );

		notices.detach().appendTo('.organize-admin-notices');
	}

	function maybeRenderNoticesToggle() {
		var notices = $('.organize-admin-notices').children();

		if (! notices.length) {
			return;
		}

		$('.organize-admin-notices').prepend('<button type="button" class="button toggle" data-notice-count="' + notices.length + '">Toggle Notices</button><div class="clear"></div>');

		$('.organize-admin-notices > button.toggle').on('click', function() {
			$('.organize-admin-notices').toggleClass('active');
		})
	}

	function init() {
		repositionNotices();
		maybeRenderNoticesToggle();
	}

	$(document).ready(init);
} )( jQuery );
