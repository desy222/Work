/**Write a method that returns the index of an element in array that is largest than its neighbours compared 
than the rest of the numbers */
function solve(arr) {
    var arr = [];

    while(arr.length < 35){             /**array generator with 35 elements */
        var randomnumber = Math.ceil(Math.random()*400)
        if(arr.indexOf(randomnumber) > -1) continue;
        arr[arr.length] = randomnumber;
    }

    let currentLargestNum = 0;    
    var newArr = [];    /**create array where we will put the new objects */
    let distance = 0; /**sum of the distancies between the currentlargest number and its neighbours */
    var myResult ;

        for(let i=1; i< arr.length; i+=1) {
            if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){
                currentLargestNum = arr[i];  
                distance = (currentLargestNum - arr[i-1]) + (currentLargestNum - arr[i+1]); 

                var result = new Object;
                result.dist = distance; /**result.dist and result.num are the new prop of object result */
                result.num = currentLargestNum;
                newArr.push(result); 
                
            }  
                     
        }

        myResult = newArr[0]; /**Here we say that myResult is taking the value of newArr index  */
        for (var i = 0; i < newArr.length; i++) {   /**Starts a loop which checks for the largst distance in every object that we have in newArr */
            if (newArr[i].dist > myResult.dist) {
                myResult = newArr[i];   /**Initialize the maximum distance with the object that contains it */
                }
        }
        console.log(`This is the array that contains all the objects that we compare
        `,newArr); 

        console.log(`This is the object that contains number bigger than its neighbours
        and compared to the other largest nums it has the biggest difference 
        with its neighbours 
        `, myResult);
         

};
solve(arr); 
