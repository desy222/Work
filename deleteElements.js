/**Write a function that removes all elements with a given value. Attach it to the array type. Read about prototype and how to attach methods.

var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];
arr.remove(1); // arr = [2,4,3,4,111,3,2,'1']; */
function elements(args) {
    let first = args[0];
    for (var i = 0; i<args.length; i+=1) {
        if(args[i] === first) {
            args.splice(i, args[i]);

        }
    }
     console.log(args);
}
elements([1,2,1,4,1,3,4,1,111,3,2,1,'1']);

/**OUTPUT: [ 2, 4, 3, 4, 111, 3, 2, '1' ] */