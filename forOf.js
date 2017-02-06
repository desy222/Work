 /**program which gves you how many times a word is used in array 
  * 
 */
 const wordArray = 'word number word pesho word'
    .split(' ');
    let words = {};
    for(let word of wordArray) {
    //     words[word]= true; //or
    if(words.hasOwnProperty(word)){ /**Determines whether an object has a property with the specified name */
        words[word]  +=1 ;
    } else {
        words[word] = 1;
    }}
    
    console.log(words);

/**Logs { word: 3, number: 1, pesho: 1 } */
