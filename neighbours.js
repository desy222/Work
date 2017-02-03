/**Write a method that checks if the element at given position in given array of integers
 *  is larger than its two neighbours (when such exist). 
 * Write program that reads an array of numbers and prints how many of 
 * them are larger than their neighbours. */

function solve(args) {
    
    counter = 0;
    for(let i=1; i< args.length; i+=1) { /**We start the for loop from the second index,because the 1st does not have neighbours */
        var left_neighbour = args[i-1]; /**The indexes of my array which I will compare */
        var right_neighbour = args[i+1]; 
        if(left_neighbour < args[i]) { /**Check if i is larfer than its neighbours */
            if(args[i] > right_neighbour) {
            counter +=1;
            }
        } 
    }
    console.log(counter); /** Output 2 */ /** 25 and 31 are bigger than their neighbours */
} 
solve([-26, -25, -28, 31, 2, 27]); /**Calling the solve functon and its arguments */