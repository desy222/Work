/**Write a program that finds the most frequent number in an array of N elements. */

function findMostFreqNum(arr) {

    var currentSequence = 1,
    longestSequence = 1,
    mostFrequentNum = arr[0];

    // Sort the array : Approach 1
    arr.sort(function(a,b) {
        return (a-b);
          });

    // find the most frequent

    for (var i = 0; i < arr.length; i++) { /**loop through the sorted array and compares the value of each index
        with the index+1 value. If they are equal currentSequence increases */
        if (arr[i] == arr[i + 1]) {
            currentSequence++;
            if (longestSequence <= currentSequence) { /**initialize the current sequence to the longest */
                longestSequence = currentSequence;
                mostFrequentNum = arr[i];
            }
        }
        else {
            currentSequence =1; //if two elements are not equal, temporary counter = 1
        }
    }
    console.log(arr); /** Output:  sorted array */
    console.log(mostFrequentNum); /**Output: the most frequent number in this array*/


    /**    Sort the array : Approach 2
    var sorted = [];
   
    
    for (var i = 0; i < arr.length - 1; i++) {
        var min = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min != i) {
            var temp = 0;
            temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    } 
    */
}
findMostFreqNum([4, 1, 1, 4, 2, 3, 3, 3, 3, 1, 2, 4, 9, 3]);
