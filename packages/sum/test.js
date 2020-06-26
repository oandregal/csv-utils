/**
 * External dependencies
 */
const rw = require( 'rw' );
const test = require( 'tape' );

/**
 * Internal dependencies
 */
const counter = require( './counter' );

test( 'counter works', t => {
	counter( rw.readFileSync( __dirname + '/demo.csv', 'utf8' ), [ 'col1' ], ( output ) => {
		t.equals( output, '56, col2\n48, col4\n11, col3' );
		t.end();
	} );
} );
