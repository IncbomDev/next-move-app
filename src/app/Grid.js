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

class Grid{
    constructor(){
        const TOP_INDEX = 0;
        const MID_INDEX = 1;
        const BOT_INDEX = 2;
        this.grid = newArray(9,3);
        console.log(this.grid);
        
        this.outputGrid = newArray(9,3);
        console.log(this.outputGrid);

        this.pointPotential = newArray(9,3);
        console.log(this.pointPotential);

        this.difficulty = [[7,7,8,9,10,9,8,7,7], [4,4,5,6,7,6,5,4,4], [1,1,2,3,4,3,2,1,1]];
        console.log(this.difficulty);

        this.dynamicLinkLoc = newArray(3,9);
        console.log(this.dynamicLinkLoc);

        this.dynamicCooperationBonus = newArray(3,9);
        console.log(this.dynamicCooperationBonus);

        this.dynamicLocScore = newArray(3,9);
        console.log(this.dynamicLocScore);

        this.dynamicLinkStart = newArray(3,9);
        console.log(this.dynamicLinkStart);

        this.nextSpotPotential = newArray(3,9);
        console.log(this.nextSpotPotential);

        

        this.cooperationBonus = false; 

        var i = 0, k = 0, val = 0;

        for (i = 0; i < 3; i++) {
            for (k = 0; k < 9; k++) {
                switch(i) {
                    case 0:
                        val = 5;
                        break;
                    case 1:
                        val = 3;
                        break;
                    case 2:
                        val = 2;
                        break;
                    default:
                        val = 0;
                        break;
                }
                this.pointPotential[i][k] = val;
                this.dynamicLinkStart[i][k] = 0;
            }
        }
    }

    setNode(i, k, val) { 
        switch(i) {
            case TOP_INDEX:
                grid[TOP_INDEX][k] = val;
                break;
            case MID_INDEX:
                grid[MID_INDEX][k] = val;
                break;
            case BOT_INDEX:
                grid[BOT_INDEX][k] = val;
                break;
        }
    }
}

class GridPoint {
    constructor(x, y, val) {
        this.x = x;
        this.y = y;
        this.val = val;
    }
}



window.onload = function() {
    var thegrid = new Grid();
}
function updateCooperationBonus() {
    if (cooperationBonus === true) {
        cooperationBonus = false;
        console.print("Cooperation Bonus: " + cooperationBonus)
    } else if (cooperationBonus === false) {
        cooperationBonus = true;
        console.print("Cooperation Bonus: " + cooperationBonus)
    }
}
