/**function which checks if the argument is number or string. After the verification we multiply the input for number
 * or increment for string
 */
function doubleMe(x) {
    if(typeof x === 'number') {
        return x*2;
    }
    if(typeof x === 'string') {
        return x+x;
    }
}

console.log(doubleMe(5)); // 10
console.log(doubleMe('jdsd')); // NaN