// FUNKCII

// let counter = 0;

// function count() {
//     count +=1;
//     return count;
// }
// count();

// //

// function sum() {
//     let sum = 0 ;
//     for (let i = 0; i < arguments.length; i += 1) {
//         sum += arguments[i];
//     }
//     console.log(arguments[8]);
//     return sum;
// }
// let x = sum (2,22,2,2,22,2,2);
// console.log(x);

// //

// function printMax(x,y) {
//     var max = 10;

//     if (max < y) {
//         max=y;
//     }
//     console.log('Maximal number: ${max}');
// }

//

// function printTriangle(n) {
//     function prinToN(n) {
//         let arr = [];
//         for(let i = 1; i <= n; i += 1) {
//             arr.push(i);
//         }
//         console.log(arr.join(''));
//         }
//         for(let i=1; i < n; i += 1) {
//             prinToN(i);
//         }
//         for (let i = n; i > 0; i -= 1){
//             prinToN(i);
//         }
// }
// printTriangle(6);

//


// function test() {
//     console.log(arguments);
// }
// test(3,3,45,undefined, 'ask'); -> vrushta obekt ;

//

// function printArguments () {
//     var i,
//         args;
//     args = [].slice.apply(arguments);
//     for ( i in arguments ) {
//         console.log(args[i]);
//     }

// }
// printArguments(1,2,3,4);//1,2,3,4

//calculate the sum of all even numbers in array :

// function sum(numbers) {
//     var number, sum = 0;

//     for(number of numbers) {
//         if (0 === number % 2) {
//             sum += number;
//         }
//     }
//     return sum;
// }
// sum([1,2,4]);

// разлика между var и let :
// var: e v scope-a na funkciata kudeto e definiran, kato if, for, while ne mu vliqqt mnogo i se zakacha otgore na funkciata 
//let: zakacha se vutre vuv funkciata, moje i da e vutre v if,
//

// function doubleMe(x) {
//     if(typeof x === 'number') {
//         return x*2;
//     }
//     if(typeof x === 'string') {
//         return x+x;
//     }
// }

// console.log(doubleMe(5)); // 10
// console.log(doubleMe('jdsd')); // NaN
//

// function printText (number, text) {
//     switch (arguments.length){
//         case 1: console.log ('Number: ${number}');
//             break;
//         case 2:
//             console.log('Number: ${number}');
//             console.log ('Text: ${text}');
//             break;
//     }
// }
// printText(5);

// function getRandomVaue(str, start, end) {
//     start = start || 0;
//     end = end || str.length;
//     //function code
// }

// MASIVI 

// let x = [1,2,3];
// console.log(x); // [1,2,3]

// let x = [1,2,3, ['ask']];
// console.log(x); //4 

// // using new Array

// let x = new Array(10);
// console.log(x); // kolko el-ta da ima v masiva t.e. 10

//

// let x = [];
// for (let i = 1; i < 20; i +=1 ) {
//     x[x.length] = i;
//     // ili 
//     x.push(i);

// }
// console.log(x);

// for (let i = 0; i < x.length; i +=2) {
//     console.log(`x[${i}] = ${x[i]}`);
// }
// izpechatva vsichki nechetni indexi vuv vida x[2]=3

// FOR-IN 


// let x = [];
// for (let i = 1; i < 20; i +=1 ) {
//     x[x.length] = i;
//     // ili 
//     //x.push(i);
// }
// //console.log(x);
// for (let i in x) {
//     console.log(x[i]);
// } //--> izvejda masiva ot 1 do 20

//
// FOR OF - podrejda indexite po golemina
// let array = [];
// array[15] = 4;
// array[9] = 7;
// array[3] = undefined;

// for (let value of array) {
//     console.log(value);
// }

//ARRAY REVERSE 
// var items =[1,2,3,4,5,6];
// var reversed = items.reverse();
// reversed = [6,5,4,3,2,1]

// array.join(" "); - vrushta masiva tostring i razdelq vs el-t sus space
// let array = [3,4,5,6];
// let line = array.join(' ');
// console.log(line);
//console.log(array.concat(['one', 5])); -> zalepq noviq masiv kum stariq

//

// slice - reje chst ot masiva ot index do index 
// splice (index, count, elemnts to add)
//

//
//typeof([1,2,3]) -> Object
// Array.isArray([1,2,3]) - > true


// OBJECTS IN JAVASCRIPT 

// let obj = {
//     name: 'pesho',
//     age: 20,
//     becomeOlder: function() {
//         this.age +=1;
//     }
// };

// Referenti Tipove - number, string, object , null, undefined, boolean

// referenten tip = stoinostta na tozi obekt ne e vsichki stoinosti vutre, a e samo referenciq kum kude se namirat stoinostite na tozi obekt ,
//
// primer: 
// let x = { value: 5};
// let y = x;
//     x.value =7;

// console.log(x.value); // 7
// console.log(y.value); // 7

// Obekt s masiv 
//let x = [1,2,5, 'dad'];
// let y = x;
// x[1] = 23489;

// console.log(x);
// console.log(y);

//Primitivnite tipove po default se kopirat po stoinost 
//kogato 

// let x = new Number('5');
// let y = x;

// x=3;

// console.log(y);
// console.log(typeof y);
// Dot.notation object.property

//izpolzvane na obektki 1;13min

// izvejdane na povtarqshtite se dumi 
// const wordArray = 'word number word pesho word'
//     .split(' ');
//     console.log(wordArray);
//     let words = {};
//     for(let word of wordArray) {
//     //     words[word]= true;
//     // }
//     // za da proverim dali word sushtestvuva ili e undefined _ 
//     if(words.hasOwnProperty(word)){
//         words[word]  +=1 ;
//     } else {
//         words[word] = 1;
//     }}
    
//     console.log(words);

// asociativni masivi - key + value , no sa obekti 

//METODI VURHI MASIVI I OBEKTI 
//every, some -proverki dali vs ili pone edin ot el v masiva otg na uslovie
// masisiv.every , callback i vrushta true ili false 
// const array = [2,4,-6,4,-3,15];
// function isOdd(x) {
//     return x % 2 === 1;
// }
// function areSmallerThan100(x) {
//     return x < 100;
// }
// const result = array.some(x => x < 10);
// //const result = array.every(areSmallerThan100); //is the same as const result = array.every(x => x < 100);
// console.log(result);

//

// const array = [2,4,-6,4,-3,15,200,30];
// function isOdd(x) {
//     return x % 2 === 1;
// }
// function areSmallerThan100(x) {
//     return x > 300;
// }

// array.every = function(isOk) {
//     console.log('func CALLED') ;// <=== funkcia za proverka , koqto namira purvata stoinost,koqto ne otg na uslovieto i vrushta false, po tozi nachin override-vame every
//     for(const x of this) {
//         if(!isOk(x)) {
//             return false;
//         }
//     }
//     return true;
// }


// Array.prototype.every = function(isOk) { // <- tozi s tozi Array.prototype overridevame gornata funkcia, overridevame na vs masivi dori nesuzdadenite
//     for(const x of this) {
//         if(!isOk(x)) {
//             return false;
//         }
//     }
//     return true;
// }

// let result = array.some( x => x > 300);
// //let result = array.some(x => x % 2 === 1);
// console.log(result);


// Callback : callback(item, [,index, [,arr]]);
// Returns: true or false;
// true : if ALL el-ts of the array meets the criteria in callback();
// false : if ANY el-t does not meet the criteria
// EXAMPLE:
// const array = [1,2,3];

// Array.prototype.every = function(isOk) { // <- trqbva da znaem index-ite za tova polzvame for in 
//     for(const i in this) {
//         if(!isOk(this[i], i , this)) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(array.every(i => i > 500));
// //как можем да проверим дли един масив е от нарастващи числа 
// //example :
// function isIncreasing (x, i , arr) {
//     if (i == 0) {
//         return true;
//     }
//     return arr[i-1] < x;
// }
// console.log(array.every(isIncreasing));


// ARRAY TRANSFORMATIONS (MAP , REDUcE, FILTER)
//FILTER - SUZDAVA MASIV OT CHISLATA, KOITO IZPALNQVAT USLOVIETO NA TOZI CALBACK'

// const array = [1,42, 7,9 ,13, 10, 30, -7, -3];
// console.log(array.filter(x => x % 2 === 1));

// MAP : prilaga callback na vs el-ti v masiva;te vrushtat nqkva stoinost spored uslovieto
// const array = [1,42, 7,9 ,13, 10, 30, -7, -3];
// console.log(array.map(x => x * 2).filter(x => x % 2 === 1)); // umnojava vs po 2 , sled tova proverqva dali ima nechetni 


// example: obrushtane na masiva
// const array = [1,42, 7,9 ,13, 10, 30, -7, -3];



// function rotate (x, i, arr ) {
//     if(i + 1 === arr.length) { // ako sme izvun masiva
//         return arr[0]; // nai- lqvata stoinost
//     }
//     return arr[i + 1];
// }

// const rotated = array.map(rotate);
// console.log(rotated);


// example: reduce - subira vs v edno
// const array = [1,42, 7,9 ,13, 10, 30, -7, -3];
// console.log(array.reduce((x,y) => x+y));

//Implementrirane na filter , map i reduce 

// const array = [1,42, 7,9 ,13, 10, 30, -7, -3];

// Array.prototype.filter = function(isOk) { / za filter
//     let filteredArray = [];
//     const len = this.length;
//     for (let i = 0; i < len; i +=1) {
//         if(isOk(this[i], i, this)){
//             filteredArray.push(this[i]);
//         }
//     }
//     return filteredArray;
// };
// console.log(array.filter(x => x % 2 === 1));

// const array = [1,42, 7,9 ,13, 10, 30, -7, -3];
// Array.prototype.map = function(transform) {
//     let mappedArray = [];
//     const len = this.length;
//     for (let i = 0; i < len; i +=1) {
//         mappedArray.push(transform(this[i], i , this));
//     }
//     return mappedArray;
// }

// console.log(array.map(x => x % 2 === 1));

// // reduce 
// const array = [1,2,3];
// Array.prototype.reduce = function (aggregate, initial) {
//     const len = this.length;
//     if (typeof initial === 'undefined') {
//         initial = this[0];
//         startIndex = 1;
//     }
//     for (let i = startIndex ; i < len; i +=1 ) {
//         initial = aggregate(initial, this[i], i, this); // polzvame initial za da si pazim tekushtiq rez
//     }
//     return initial;
// };
// console.log(array.reduce((x,y) => x + y));

// FOREACH - sushtoto kato map, obhojda celiq masiv , samo che ne vrushta nov masiv ot vsichki rezultati pri izvikvane na funkciqta , samo q izpulnqva
// example :

//  const array = [1,2,64, -6,-23,4,3]; 
//  array.forEach(x => console.log(x));

 // s forEach zaduljitelno zadavame callback, te. pishem funkciq

// implementirane na forEach

// Array.prototype.forEach = function(func) {
//     const len = this.length;
//     for (let i = 0; i < len ; i +=1){
//         func(this[i], i, this)
//     }
// };


// METODI ZA TURSENE 

//FIND
const array = [23,23,643, -63,-23,43,2]; 
//console.log(array.find(x => x % 2 === 1));

//implementirane na find

// Array.prototype.find = function(isOk) {

//     const len = this.length;
//     for (let i = 0; i < len ; i +=1) {
//         if(isOk(this[i],i, this)){
//             return this[i];
//         }
//     }
// }
// console.log(array.find(x => x % 2 === 0));

// SORT METHOD 
// const people = [
//     { name: 'Pesho', age: 19 },
//     { name: 'Ivo', age: 39 },
//     { name: 'Gosho', age: 29 }
// ];




// people.sort((x,y) => x.age - y.age); // sortira po vuzrast 
// console.log(people);

// ARRAY FILL 
array.fill(0,1,5); // zapulva array-a s 0 ot 1 do 5ti index

 // REGULAR EXPRESSION
 