/**calculate the sum of all even numbers in array : */

function sum(numbers) {
    var number, sum = 0;

    for(number of numbers) { 
        if (0 === number % 2) { /**ако се дели без остатък на 2 */
            sum += number; /**увеличаваме сумата със стойността на съответния индекс */
        }
    }
    return sum;
}
sum([1,2,4]); 