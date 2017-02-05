/**Write a program that finds the length of the maximal increasing sequence in an array of N integers. */
/**OUTPUT : Print the length of the maximal increasing sequence */

function findMaxIncrSeq(arr) {

    var currentSequence = 1,
        longestSequence = 1,
        indexOfLongest;

    for (var i = 0; i < arr.length; i++) { /**Looping through the array from 0 index */
        if (arr[i] < arr[i + 1]) {
            currentSequence++; /** adding 1 to the counter if the second index is bigger than the previous*/
        } else if (longestSequence < currentSequence) {
                longestSequence = currentSequence;
                indexOfLongest = i - currentSequence + 1;
            
            currentSequence = 1; //if two elements are not equal, temporary counter = 1
        }
    }
     console.log(longestSequence);
}

findMaxIncrSeq([3, 2, 3, 4, 5,6, 2, 2, 4]); /** 5 */
