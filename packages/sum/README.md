# Sum CSV columns

This utility take a CSV file like:

	column1,column2,column3,column4,column5
	2017-02-07,1,2,3,'foo'
	2017-02-08,5,6,7,'bar'
	2017-02-09,1,0,1,'foobar'
	2017-02-10,9,0,0,'barfoo'

an outputs the sum of its columns, ordered by count:

	16, column2
	11, column4
	 8, column3

# How to use it

Install it as a global module:

	npm install -g sum-csv

Use it UNIX-like:

	cat demo.csv | sum-csv --ignore-columns column1,column5

Or as a regular script:

	sum-csv --ignore-columns column1,column5 demo.csv

# Options

`--ignore-columns cols` or `-i cols`:

* Allows you to pass a list of columns to ignore, separated by commas.
