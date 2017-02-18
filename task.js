/**Write a method that returns the index of an element in array that is largest than its neighbours compared 
than the rest of the numbers */

function solve(arr){
    let largest = 0;
    var newObj = {}
    
    for(let i=1; i< arr.length; i+=1) {
        if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){

            largest = arr[i];         
            newObj.arrLargest = largest;  /**
             assign largest to the newObj arrLargest property */
            
            function findDistance () { /**function which compares the distances between neighbours of largest el-ts */
                
                if(largest - arr[i-1] > largest - arr[i + 1]) {
                    distance = largest - arr[i-1]; 
                } 
                else {
                    distance = largest - arr[i+1];
                }

                 newObj.arrDistance = distance; /**assign the distance to the arrDistance propery of newObj */
                 console.log(newObj) 
                 /**Here the program logs : 
                 { arrLargest: -1, arrDistance: 49 }
                 { arrLargest: -2, arrDistance: 298 } */
            }

            findDistance();
         }
    }
};

solve([-30 ,-1, -50, -80, -2 ,-300]); 

