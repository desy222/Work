/**Write a method that returns the index of an element in array that is largest than its neighbours compared 
than the rest of the numbers */

function solve(arr){
    var newArr = [];
    let largest = 0;
    let differance = [];

    var newObj = {
                arrDistance : '',
                arrLargest : ''
            }

    
    for(let i=1; i< arr.length; i+=1) {
        if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){

            largest = arr[i];         // finds largest nums  
            newArr.push(arr[i]);
            newObj.arrLargest = newArr;  /**Write the values of largest elements in newArr then
             assign this array of values to the newObj arrLargest propery */
            
            
            function findDistance () { /**function which compares the distances between neighbours of largest el-ts */
                
                if(largest - arr[i-1] > largest - arr[i + 1]) {
                    distance = largest - arr[i-1]; 
                } 
                else {
                    distance = largest - arr[i+1];
                }
                 differance.push(distance); /**puts them in new arr - differance */
                 newObj.arrDistance = differance; /**assign the differance to the arrDistance propery of newObj */
            }
            findDistance();

         }


    }
    console.log(newObj); /** output : { arrDistance: [ 49, 298 ], arrLargest: [ -1, -2 ] } */
               
                

};
solve([-30 ,-1, -50, -80, -2 ,-300]); 

