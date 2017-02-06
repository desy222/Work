/**Write a program that finds in given array two integers , the sum of them should be = to given number. */

var unSortedArr = [2, 3, 2, 5, 4, 5, 5, 5, 5, 9, 6, 8, 8, 7];
var sum = 10;

function pairMatchingSum (arr, sum) {
  var start, end, tempSum;

  var i = 0 ;
  var j = arr.length - 1; /**The last index of the array */

  // Create a new Object instance
  var s = {};
  var sortedArr = arr.sort(); 
/**The program begins to compare 1st and last index ,after that it compares index[i+1] and index[arr.length] and so on until
 * it goes right in the middle where i == j. When this happens
 */
  while (i !== j) {
    start = sortedArr[i];
    end = sortedArr[j];
    tempSum = start + end;
    if (tempSum === sum) {
      
      s[start +'-'+ end] = true; /**Put the true statements in the empty object. 
      After that it continues to increase i and decrement j with step 1*/
      i++;
      j--;
      
    } else if (tempSum > sum) {
      j--;
      

    } else {
      i++;
    }
  }

  console.log("Pairs matching the input sum in the given array without duplicates = ", Object.keys(s));
  // Pairs matching the input sum in the given array without duplicates =  [ '2-8', '3-7', '4-6', '5-5' ]

}

pairMatchingSum(unSortedArr, sum);
