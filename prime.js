
function printPrime(value) {
    var primes = []; /// празен масив
    for(var i = 2; i < value; i++) {
        primes[i] = true; // вс стойности за i са предефинирани с true;
    }
    var limit = Math.sqrt(value); 
    for(var i = 2; i < limit; i++) { 
        if(primes[i] === true) {
            for(var j = i * i; j < value; j += i) {
                
                primes[j] = false;
            }
        }
    }
    for(var i = 2; i < value; i++) {
        if(primes[i] === true) {
            console.log(i + " " + primes[i]);
        }
    }
}
printPrime(12);