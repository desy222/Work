/**Promises in JavaScript */
let promiseToCleanTheRoom = new Promise(function(resolve, reject){
    //cleaning the room 

    let isClean = false;

    if(isClean) {
        resolve('clean');
    } else {
        reject('not clean');
    }

});

promiseToCleanTheRoom.then(function(fromResolve){
    console.log('the room is' + fromResolve);
}).catch(function(fromreject) {
    console.log('the room is' + fromreject);
}); /**The room is not clean */


/**Dependensies */

let cleanRoom = function() {
    return new Promise(function(resolve,reject){
        resolve(' Cleaned the room');
    })
}

let removeGarbage = function(message) {
    return new Promise(function(resolve,reject){
        resolve(' remove garbage');
    })
}

let winiceCream = function(message) {
    return new Promise(function(resolve, reject) {
        resolve(' won icecrean');
    });
}

cleanRoom().then(function(result){
    return removeGarbage(result);
}).then(function(result){
    return winiceCream(result);
}).then(function(result){
    console.log('finished' + result);
})  /**finished won icecrean */