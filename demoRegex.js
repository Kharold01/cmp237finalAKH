// Katie Harold
// CMP237
// #3 Regexp


var values = ["$1.25", ".25", "$.25", "$1.25.25", "$1.2523", "$13431312313.1", "$1234.22"];

var regex = /\d*[0-9].*\d[0-9]/;


values.forEach(function(value) {
	if (regex.test(value))
	print(value);
});


