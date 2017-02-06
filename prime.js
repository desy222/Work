/**Write a program that finds all prime numbers in the range [1 ... N]. 
 */
function printPrime(value) {
    var primes = []; /// empty array
    for(var i = 2; i < value; i++) { 
        primes[i] = true; // every index is predefined with 'true';
    }
    var limit = Math.sqrt(value); 
    /** Here we make two for loops where the decision is taken . 
        If current index answer these conditions , the number is prime or not!*/
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
/**printprime 
Logs : 
2 true
3 true
5 true
7 true
11 true
*/
