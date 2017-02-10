/**Program that finds how many times a string is found in array */

const wordArray = 'word pesho number word pesho word word word vsetaq' 
    .split(' '); 

//console.log(wordArray);

let words = {};

for (let word of wordArray) {
    //words[word] = true;
    
     /**console.log(words); => { word: true, pesho: true, number: true, vsetaq: true } */
     if(words.hasOwnProperty(word)){ 
        words[word] += 1;              /**adding 1 to the value of the property in words object*/
        
     } else {
         words[word] = 1; /**Else it is found just onece */
      }
     
}

console.log(words); /**{ word: 5, pesho: 2, number: 1, vsetaq: 1 } */