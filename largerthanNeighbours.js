/**Write a method that returns the index of the first element in array that is larger than its neighbours. */
function solve(arr) {
    for (let i = 1; i<=arr.length; i +=1) {
        firstLargerThanNeighbours = arr[0];
        if(arr[i] > arr[0] && arr[i] > arr[i+1]) { 
        /**Loop through the array for these conditions and if true 
            the first larger than its neightbours number is current */
            firstLargerThanNeighbours = arr[i];
        }
        else {
            return -1;
            console.log('There\'sno such number');
        }
        console.log(firstLargerThanNeighbours);
    }
}
solve([-26, -25, -28, 31, 2, 27]); // Output -25;
