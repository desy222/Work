
function printText (number, text) {
    switch (arguments.length){
        case 1: 
            if(typeof arguments.length === 'number') {
            console.log ('Number: ' + number);
            }
            break;
        case 2:
            if(typeof arguments.length === 'string') {
            console.log ('Text: ' + text);
            }
            
            break;
    }
}
printText('daa');