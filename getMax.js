/**Write a method GetMax() with two parameters that returns the larger of two integers. */

function numbers(args) {
    args.sort(function(a,b){
        return b-a; /** compare a and b and the sort function takes care to find the biggest one */
    });
    console.log('The biggest number is' + args[0]);
}
numbers([4, 2, 5, 1, 333]);  /**The biggest number is 333 */
