const d3dsv = require( 'd3-dsv' );
const d3array = require( 'd3-array' );

module.exports = ( input, toIgnore, callback ) => {
	const isWhitelisted = ( row ) => ! toIgnore.includes( row[ 0 ] );
	const format = ( row ) => [ row.slice( 1 ).reduce( ( a, b ) => +a + +b ), ' ' + row[ 0 ] ];
	const byCount = ( a, b ) => {
		if ( a[ 0 ] > b[ 0 ] ) {
			return -1;
		}
		if ( a[ 0 ] < b[ 0 ] ) {
			return 1;
		}
		return 0;
	};

	const matrix = d3dsv.csvParseRows( input );
	const results = d3array.transpose( matrix ).filter( isWhitelisted ).map( format ).sort( byCount ); //eslint-disable-line max-len
	callback( d3dsv.csvFormatRows( results ) );
};
