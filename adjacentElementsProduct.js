function solution(inputArray) {
    var x = 0;
    var y = 0;
    var m = -Infinity;
    for(var i=0; i< inputArray.length; i++){
        x = inputArray[i];
        y = inputArray[i+1];
        if(x*y > m) m = x*y;
    }
    return m;
}
