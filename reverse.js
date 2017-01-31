function reverseString(str) {
    var backway = str.split("").reverse().join(""); //split string into array, reverse it and then join it again
    return backway;
}

reverseString('DESISLAVA');