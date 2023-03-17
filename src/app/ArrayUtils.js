function newArray(rows, cols) { 
    var arr = []; 
    for (var i=0;i<rows;i++) { 
        arr[i] = []; 
        for (var j=0;j<cols;j++) { 
            arr[i][j] = 0; 
        } 
    } 
    return arr; 
}

function SumOfArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function Boolean2Double(boolean) {
    if (boolean) {
        return 1;
    } else {
        return 0;
    }
}
function Boolean2Int(boolean) {
    if (boolean) {
        return 1;
    } else {
        return 0;
    }
}