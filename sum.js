//Write a program that finds in given array of integers a sequence of given sum S (if present).

// function solve(sum, array) {
//     var currentSum = 0;
//     var start = array[0];
//     for(let i=0; i<array.length; i+=1) {
//         while(currentSum < sum) {
//             currentSum = array[start[i]++];
//         }
//         console.log(currentSum);
//     }
    
// }

// solve(11, [4, 3, 1, 4, 2, 5, 8]);

var unSortedArr = [2, 3, 2, 5, 4, 5, 5, 5, 5, 9, 6, 8, 8, 7];
var sum = 10;

function pairMatchingSum (arr, sum) {
  var start, end, tempSum;

  var i = 0 ;
  var j = arr.length - 1;

  // Create a new Object instance
  var s = {};
  var sortedArr = arr.sort();
  //console.log(sortedArr)
  while (i !== j) {
    start = sortedArr[i];
    end = sortedArr[j];
    tempSum = start + end;
    //console.log(start);
    //console.log(end);
    if (tempSum === sum) {
      
      s[start +'-'+ end] = true;
      
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