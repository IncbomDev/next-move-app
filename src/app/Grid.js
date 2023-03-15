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
        console.log("Grid:" + this.grid);
        
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

class GridAnalyzer {
  constructor(grid, PointPotentialWeight, DifficultWeight, LocationWeight, CooperationWeight, LinkLocationWeight) { 
    this.ppw = PointPotentialWeight;
    this.dw = DifficultWeight;
    this.lw = LocationWeight;
    this.cw = CooperationWeight;
    this.llw = LinkLocationWeight;
    this.grida = grid;
  }
  AnalyzeGrid() {
    let i,k,l;
    let l2 = true, l1 = true, r1 = true, r2 = true;
    var DynamicCooperationLinks = 0;
    for (i = 0; i<3; i++) {
        for (k = 0; k<9; k++) {
            switch(k) {
                case 1:
                    l2 = false;
                    l1 = this.grida.grid[i][k-1];
                    r2 = this.grida.grid[i][k+2];
                    r1 = this.grida.grid[i][k+1];
                    break;
                case 0:
                    l2 = false;
                    l1 = false;
                    r2 = this.grida.grid[i][k+2];
                    r1 = this.grida.grid[i][k+1];
                    break;
                case 7:
                    r2 = false; 
                    r1 = this.grida.grid[i][k+1];
                    l2 = this.grida.grid[i][k-2];
                    l1 = this.grida.grid[i][k-1];
                    break;
                case 8:
                    r2 = false;
                    r1 = false;
                    l2 = this.grida.grid[i][k-2];
                    l1 = this.grida.grid[i][k-1];
                    break;
                default:
                    l2 = this.grida.grid[i][k-2];
                    l1 = this.grida.grid[i][k-1];
                    r2 = this.grida.grid[i][k+2];
                    r1 = this.grida.grid[i][k+1];
                    break;

            }
            this.grida.dynamicLocScore[i][k] = Boolean2Double(l1)+Boolean2Double(r1)+0.5*Boolean2Double(l2)+0.5*Boolean2Double(r2);
            this.grida.dynamicLinkLoc[i][k] = 0;

            if(k!=0 && Boolean2Int(this.grida.grid[i][k])+Boolean2Int(r1)+Boolean2Int(r2) == 3 && this.grida.dynamicLinkStart[i][k-1] == 0) {
                this.grida.dynamicLinkStart[i][k] = 1;
            }
            else if (k==0 && Boolean2Int(this.grida.grid[i][k])+Boolean2Int(r1)+Boolean2Int(r2) == 3) {
                this.grida.dynamicLinkStart[i][k] = 1;
            }
            else {
                this.grida.dynamicLinkStart[i][k] = 0;
            }
        }
        if (Boolean2Int(this.grida.grid[i][0])+Boolean2Int(this.grida.grid[i][1])+Boolean2Int(this.grida.grid[i][2])==2) {
            for (l=0;l<l+3; l++) {
                if(this.grida.grid[i][k]==false) {
                    this.grida.dynamicLinkLoc[i][k];
                }
            }
        }
        else if (Boolean2Int(this.grida.grid[i][3])+Boolean2Int(this.grida.grid[i][4])+Boolean2Int(this.grida.grid[i][5])==2) { 
            for (l=0;l<l+3; l++) {
                if(this.grida.grid[i][k]==false) {
                    this.grida.dynamicLinkLoc[i][k];
                }
            }
        }
        else if (Boolean2Int(this.grida.grid[i][6])+Boolean2Int(this.grida.grid[i][7])+Boolean2Int(this.grida.grid[i][8])==2) {
            for (l=0;l<l+3; l++) {
                if(this.grida.grid[i][k]==false) {
                    this.grida.dynamicLinkLoc[i][k];
                }
            }
        }
        for (l=3; l<=5; l++) {
            if (this.grida.grid[i][l] == true) {
                 DynamicCooperationLinks++;
            } 
        }
    }
    if (DynamicCooperationLinks < 3) {
        for (i=0; i<3; i++) {
            for (k=3; k<6; k++) {
                if (this.grida.grid[i][k] == false) {
                    this.grida.dynamicCooperationBonus[i][k] = 1;
                }
            }
        }
    }
    for(i=0; i<3; i++) {
        for(k=0; k<9; k++) {
            if (this.grida.grid[i][k] == true) {
                this.grida.outputGrid[i][k]=0;
            }
            else {
                let potentialVal = this.ppw*this.grida.pointPotential[i][k]+this.dw*this.grida.difficulty[i][k]+this.lw*this.grida.dynamicLocScore[i][k]+this.cw*this.grida.dynamicCooperationBonus[i][k]+this.llw*this.grida.dynamicLinkLoc[i][k];
                let potentialVal2 = 0, val1=0;
                if (this.grida.dynamicCooperationBonus[i][k] == true && SumOfArray(grid.DynamicCooperationLinks[i]) == 0) { val1=5;}
                else {val1=5;}
                if (SumOfArray(this.grida.dynamicLinkStart<val1)) {
                    potentialVal2=1;
                }
                else {
                    potentialVal2=0;
                }
                this.grida.outputGrid[i][k] = potentialVal+potentialVal2;
            }
        }
    }
    let max = 0;
    for (i=0; i<3; i++) { 
        for (k=0; k<9; k++) {
            if (this.grida.outputGrid[i][k] > max) {
                max = this.grida.outputGrid[i][k];
            }
        }
    }
  }
}

window.onload = function() {
    var thegrid = new Grid();
    console.log("Generated Grid:" + thegrid.grid)
    console.log(thegrid);
    var analyzer = new GridAnalyzer(thegrid, 0.5, 0.75, 1, 0.25, 1);
    console.log(analyzer.grida);
    analyzer.AnalyzeGrid();
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