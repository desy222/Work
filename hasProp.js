/**Write a function that checks if a given object contains a given property.

var obj  = …;
var hasProp = hasProperty(obj, 'length'); */

function hasProperty(obj, property) { /**function with two parameters, which checks if given object has a property */
        for (var prop in obj) {
            if (prop === property) {
                return true;
            }
        }
        return false;
    }
    var obj = {
        firstName: 'MyName',
        lastName: 'Mylaastname',
        age: '23'
    }
    console.log(hasProperty(obj, 'length')); //false
    console.log(hasProperty(obj, 'age')); // true