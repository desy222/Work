/**This is a function, which gives the sum of the variable x */

function sum() {
    let sum = 0 ;
    for (let i = 0; i < arguments.length; i += 1) {
        sum += arguments[i];
    }
    console.log(arguments[3]); // logs 3rd element of the array 'x'
    return sum;
}
let x = sum (2,22,2,2,22,2,2);
console.log(x); // logs the sum of the numbers in this array