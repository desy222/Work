/**Write a function that makes a deep copy of an object. The function should work for both primitive and reference types. */
        function deepCopy(element) {
            if (typeof element === 'object') { /// Works for objects,functons and arrays
                var currentObj = {};
                for (var property in element) {
                    currentObj[property] = deepCopy(element[property]);
                }
                return currentObj;
            }
            else {                        /**This will work if the type is string,boolean or number */
                return element;
            }
        }

    var number = 5;
    var numberResult = deepCopy(number);
        console.log('Number: ' + numberResult);
    var string = 'JavaScript';
    var stringResult = deepCopy(string);
        console.log('String: ' + stringResult);
    var array = [1, 2, 3, 'copy'];
    var resultArray = deepCopy(array);
        console.log('Array: ');
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    var obj = {
        firstName: 'Plamen',
        lastName: 'Georgiev',
        age: 23
    }
    var resultObj = deepCopy(obj);
        console.log('Object: ');
    for (var property in resultObj) {
        console.log(property + ' -> ' + resultObj[property]);
    }
/**OUTPUT
Number: 5
String: JavaScript
Array:
1
2
3
copy
Object:
firstName -> Plamen
lastName -> Georgiev
age -> 23
 */