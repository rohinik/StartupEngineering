var fs = require('fs');
var outfile = "hello.txt";
var out = "Hello !!!! Welcome to startup Engineering course.\n";
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);