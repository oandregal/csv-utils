#!/usr/bin/env node

/**
 * External dependencies
 */
const rw = require( 'rw' );
const commander = require( 'commander' );

/**
 * Internal dependencies
 */
const counter = require( './counter' );

const columns = ( val ) => val.split( ',' );
const writeToOutput = ( output ) => process.stdout.write( output );
const getInputString = () => process.stdin.isTTY
	? rw.readFileSync( __dirname + '/' + commander.args, 'utf8' ) // ./index.js inputFile
	: rw.readFileSync( '/dev/stdin', 'utf8' ); // cat demo.csv | ./index.js

commander.on( '--help', () => {
	process.stdout.write( '  Examples:' );
	process.stdout.write( '\n' );
	process.stdout.write( '\n    $ sum-csv -i date demo.csv' );
	process.stdout.write( '\n    $ cat demo.csv | sum-csv -i date' );
	process.stdout.write( '\n' );
	process.stdout.write( '\n' );
} );

commander
	.description( 'Show the result of summing CSV file columns.' )
	.option(
		'-i, --ignore-columns [columns]',
		'A list of columns to ignore, separated by commas - ie: col1,col2', columns, []
	).parse( process.argv );

counter( getInputString(), commander.ignoreColumns, writeToOutput );
