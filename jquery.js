
function checkScroll() {
	var startY = $( '.navibar' ).height() * 2; //The point where the navbar changes in px

	if ( $( window ).scrollTop() > startY ) {
		$( '.navibar' ).addClass( "scrolled" );
	} else {
		$( '.navibar' ).removeClass( "scrolled" );
	}
}

if ( $( '.navibar' ).length > 0 ) {
	$( window ).on( "scroll load resize", function () {
		checkScroll();
	} );
}
$( function () {
	// Desired offset, in pixels
	var offset = -130;
	// Desired time to scroll, in milliseconds
	var scrollTime = 800;

	$( 'a[href^="#"]' ).click( function () {
		// Need both `html` and `body` for full browser support
		$( "html, body" ).animate( {
			scrollTop: $( $( this ).attr( "href" ) ).offset().top + offset
		}, scrollTime );

		// Prevent the jump/flash
		return false;
	} );
} );