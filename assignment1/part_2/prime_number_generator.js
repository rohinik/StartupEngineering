var isPrime = true;
var primeNumbers = [];
var counter = 2;
primeNumbers.push(counter);
counter++;

while(primeNumbers.length < 100){
  isPrime = true;
  var limit = Math.round(Math.sqrt(counter));
  for (var mod = 2; mod <= limit; mod++) {
    if (counter%mod == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    primeNumbers.push(counter);
  }
  counter++;
}

var fs = require('fs');
var outfile = "prime_numbers.txt";
fs.writeFileSync(outfile, primeNumbers.join(","));


