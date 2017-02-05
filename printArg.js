/**Function which prints the arguments in given array  */
function printArguments () {
    var i,
        args;
    args = [].slice.apply(arguments); /**Array.prototype.slice.apply(arguments) converts arguments into an ARRAY,
    anyway JS returns it like an object . 
    For exmp if we have :
    function f () {
        return arguments;
    }
    
        f("1", "2") instanceof Array - FALSE!  ITS object!
    */
    for ( i in arguments ) {
        console.log(args[i]);
    }

}
printArguments(1,2,3,4);//1,2,3,4