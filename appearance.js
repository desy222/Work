/**Write a method that counts how many times given number appears in a given array. 
Write a test program to check if the method is working correctly.*/

function appearance(element) {

    let i = 73; /**i is the input */
    var counter = 0; /**counts how many times i is found in this array */
    
    for(let k=0; k < element.length; k +=1) { /**loop through the array,starting fom 0 index with step 1 */
        
        if(i === element[k]) { /**checks if i matches the index of k in the array and if it does we incremen the counter */
            counter+=1;
        } else if(counter == 0) {
            console.log('There\'s no such number as i'); /**No matches found. */
        }
    }
    if(counter > 1){
        console.log(i ,' is found ',counter,' times') /**if there's any number such as our input console.log the value*/
    }
}

appearance([28, 6, 21, 6 -7856, 73, 73, 73]); /**Call function appearance */
