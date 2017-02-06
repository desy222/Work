const array = [2,4,-6,4,-3,15];
/**function 1 checks if some of the nubers are odd*/
function isOdd(x) {
    return x % 2 === 1;
}
/**function 1 checks if every of the nubers are < 100*/
function areSmallerThan100(x) {
    return x < 100;
}
//const result = array.some(x => x < 100); /**Returns true */
const result = array.every(areSmallerThan100); //is the same as const result = array.every(x => x < 100);
/** Returns true */
console.log(result);