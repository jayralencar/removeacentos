var fs = require('fs');

if(process.argv[2]){
	var out = process.argv[3] || process.argv[2];
	fs.readFile(process.argv[2], function(err, data){
		data.split('á')
	});
}else{
	throw "Use: node app file/path";
}