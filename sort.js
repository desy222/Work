function sort(args) {
    var sorted = [];
    
    for(i=0; i < args.length; i+=1) {
        var min = i ;
        for(var j=i; j < args.length; j+=1 ) {
            if (args[j] < args[i]) {
                j = min;
            }
        }
    }
    //console.log(args[j])
    if (min != i) {
    var temp = 0;
        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    console.log(temp);

    for (var i = 0; i < arr.length; i++) {
        sorted.push(arr[i]);
    }
    
}
sort(['6', '3', '4', '1', '5', '2', '6']);