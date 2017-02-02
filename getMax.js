function numbers(args) {
    args.sort(function(a,b){
        return b-a;
    });
    console.log('The biggest number is' + args[0]);
}
numbers([4, 2, 5, 1, 333]);