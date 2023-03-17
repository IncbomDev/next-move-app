let i, j, k, l;
class Grid {
    constructor() {
        const TOP_INDEX = 0;
        const MID_INDEX = 1;
        const BOT_INDEX = 2;
        this.grid = newArray(3, 9);
        console.log("Grid:" + this.grid);

        this.outputGrid = newArray(3, 9);
        console.log(this.outputGrid);

        this.pointPotential = newArray(3, 9);
        console.log(this.pointPotential);

        this.difficulty = [
            [7, 7, 8, 9, 10, 9, 8, 7, 7],
            [4, 4, 5, 6, 7, 6, 5, 4, 4],
            [1, 1, 2, 3, 4, 3, 2, 1, 1]
        ];
        console.log(this.difficulty);

        this.dynamicLinkLoc = newArray(3, 9);
        console.log(this.dynamicLinkLoc);

        this.dynamicCooperationBonus = newArray(3, 9);
        console.log(this.dynamicCooperationBonus);

        this.dynamicLocScore = newArray(3, 9);
        console.log(this.dynamicLocScore);

        this.dynamicLinkStart = newArray(3, 9);
        console.log(this.dynamicLinkStart);

        this.nextSpotPotential = newArray(3, 9);
        console.log(this.nextSpotPotential);

        this.cooperationBonus = false;
    }

    setNode(i, k, val) {
        switch (i) {
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

    ConfigureGrid() {
        let val = 0;
        for (i = 0; i < 3; i++) {
            for (k = 0; k < 9; k++) {
                switch (i) {
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
        console.log("Configured Grid");
    }
}

class GridPoint {
    constructor(x, y, val) {
        this.x = x;
        this.y = y;
        this.val = val;
    }
}

class GridAnalyzer {
    constructor(gridA, PointPotentialWeight, DifficultWeight, LocationWeight, CooperationWeight, LinkLocationWeight) {
        this.ppw = PointPotentialWeight;
        this.dw = DifficultWeight;
        this.lw = LocationWeight;
        this.cw = CooperationWeight;
        this.llw = LinkLocationWeight;
        this.gridA = gridA;
    }
    AnalyzeGrid() {
        this.gridA.ConfigureGrid();
        console.log("ANALYZING GRID...");
        let l2 = true,
            l1 = true,
            r1 = true,
            r2 = true;
        var DynamicCooperationLinks = 0;

        console.log("Looping...");
        console.log("GRIDA: " + this.gridA.grid);
        for (i = 0; i < 3; i++) {
            console.log("i: "+i);
            for (k = 0; k < 9; k++) {
                console.log("i ==> k: "+k);
                switch (k) {
                    case 1:
                        l2 = false;
                        l1 = this.gridA.grid[i][k - 1];
                        r2 = this.gridA.grid[i][k + 2];
                        r1 = this.gridA.grid[i][k + 1];
                        break;
                    case 0:
                        l2 = false;
                        l1 = false;
                        r2 = this.gridA.grid[i][k + 2];
                        r1 = this.gridA.grid[i][k + 1];
                        break;
                    case 7:
                        r2 = false;
                        r1 = this.gridA.grid[i][k + 1];
                        l2 = this.gridA.grid[i][k - 2];
                        l1 = this.gridA.grid[i][k - 1];
                        break;
                    case 8:
                        r2 = false;
                        r1 = false;
                        l2 = this.gridA.grid[i][k - 2];
                        l1 = this.gridA.grid[i][k - 1];
                        break;
                    default:
                        l2 = this.gridA.grid[i][k - 2];
                        l1 = this.gridA.grid[i][k - 1];
                        r2 = this.gridA.grid[i][k + 2];
                        r1 = this.gridA.grid[i][k + 1];
                        break;

                }
                this.gridA.dynamicLocScore[i][k] = Boolean2Double(l1) + Boolean2Double(r1) + 0.5 * Boolean2Double(l2) + 0.5 * Boolean2Double(r2);
                this.gridA.dynamicLinkLoc[i][k] = 0;

                if (k != 0 && Boolean2Int(this.gridA.grid[i][k]) + Boolean2Int(r1) + Boolean2Int(r2) == 3 && this.gridA.dynamicLinkStart[i][k - 1] == 0) {
                    this.gridA.dynamicLinkStart[i][k] = 1;
                } else if (k == 0 && Boolean2Int(this.gridA.grid[i][k]) + Boolean2Int(r1) + Boolean2Int(r2) == 3) {
                    this.gridA.dynamicLinkStart[i][k] = 1;
                } else {
                    this.gridA.dynamicLinkStart[i][k] = 0;
                }
            }

            if (Boolean2Int(this.gridA.grid[i][0]) + Boolean2Int(this.gridA.grid[i][1]) + Boolean2Int(this.gridA.grid[i][2]) == 2) {
                for (l = 0; l < l + 3; l++) {
                    if (this.gridA.grid[i][k] == false) {
                        this.gridA.dynamicLinkLoc[i][k];
                    }
                }
            } else if (Boolean2Int(this.gridA.grid[i][3]) + Boolean2Int(this.gridA.grid[i][4]) + Boolean2Int(this.gridA.grid[i][5]) == 2) {
                for (l = 0; l < l + 3; l++) {
                    if (this.gridA.grid[i][k] == false) {
                        this.gridA.dynamicLinkLoc[i][k];
                    }
                }
            } else if (Boolean2Int(this.gridA.grid[i][6]) + Boolean2Int(this.gridA.grid[i][7]) + Boolean2Int(this.gridA.grid[i][8]) == 2) {
                for (l = 0; l < l + 3; l++) {
                    if (this.gridA.grid[i][k] == false) {
                        this.gridA.dynamicLinkLoc[i][k];
                    }
                }
            }
            for (l = 3; l <= 5; l++) {
                if (this.gridA.grid[i][l] == true) {
                    DynamicCooperationLinks++;
                }
            }
        }
        if (DynamicCooperationLinks < 3) {
            for (i = 0; i < 3; i++) {
                for (k = 3; k < 6; k++) {
                    if (this.gridA.grid[i][k] == false) {
                        this.gridA.dynamicCooperationBonus[i][k] = 1;
                    }
                }
            }
        }
        for (i = 0; i < 3; i++) {
            for (k = 0; k < 9; k++) {
                if (this.gridA.grid[i][k] == true) {
                    this.gridA.outputGrid[i][k] = 0;
                } else {
                    let potentialVal = this.ppw * this.gridA.pointPotential[i][k] + this.dw * this.gridA.difficulty[i][k] + this.lw * this.gridA.dynamicLocScore[i][k] + this.cw * this.gridA.dynamicCooperationBonus[i][k] + this.llw * this.gridA.dynamicLinkLoc[i][k];
                    let potentialVal2 = 0,
                        val1 = 0;
                    if (this.gridA.dynamicCooperationBonus[i][k] == true && SumOfArray(this.gridA.DynamicCooperationLinks[i]) == 0) {
                        val1 = 5;
                    } else {
                        val1 = 4;
                    }
                    if (SumOfArray(this.gridA.dynamicLinkStart < val1)) {
                        potentialVal2 = 1;
                    } else {
                        potentialVal2 = 0;
                    }
                    this.gridA.outputGrid[i][k] = potentialVal + potentialVal2;
                }
            }
        }
        /*
        let max = 0;
        for (i = 0; i < 3; i++) {
            for (k = 0; k < 9; k++) {
                if (this.gridA.outputGrid[i][k] > max) {
                    max = this.gridA.outputGrid[i][k];
                }
            }
        }*/
        console.log("--------------------");
        console.log(this.gridA.outputGrid);
        return this.gridA.outputGrid;
    }
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