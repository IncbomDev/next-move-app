function Create2DArray(dimensions) {
    var arr = new Array(dimensions || 0),
    i=dimensions;
    if (arguments.length>1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1-i] = Create2DArray.apply(this,args);
    }
    return arr;
}