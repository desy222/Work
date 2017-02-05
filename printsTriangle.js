/**Write a program which prints out a triangle */

function printTriangle(n) {
    function prinToN(n) {
        let arr = []; /**empty array */
        for(let i = 1; i <= n; i += 1) {
            arr.push(i);
        }
        console.log(arr.join('')); /**arr.join - array separator */
        }
        for(let i=1; i < n; i += 1) {
            prinToN(i);
        }
        for (let i = n; i > 0; i -= 1){
            prinToN(i);
        }
}
printTriangle(3);

/**OUTPUT
1
12
123
1234
12345
123456
12345
1234
123
12
1
*/