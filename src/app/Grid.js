let i, j, k, l;
class Grid {
    constructor() {
        this.grid = newArray(3, 9);

        this.outputGrid = newArray(3, 9);

        this.pointPotential = newArray(3, 9);

        this.difficulty = [
            [7, 7, 8, 9, 10, 9, 8, 7, 7],
            [4, 4, 5, 6, 7, 6, 5, 4, 4],
            [1, 1, 2, 3, 4, 3, 2, 1, 1]
        ];

        this.dynamicLinkLoc = newArray(3, 9);

        this.dynamicCooperationBonus = newArray(3, 9);

        this.dynamicLocScore = newArray(3, 9);


        this.dynamicLinkStart = newArray(3, 9);

        this.nextSpotPotential = newArray(3, 9);

        this.cooperationBonus = false;
        for (i = 0; i < 3; i++) {
            for (k = 0; k < 9; k++) {
                this.grid[i][k] = false;
                this.outputGrid[i][k] = 0;
                this.pointPotential[i][k] = 0;
                this.dynamicLinkLoc[i][k] = 0;
                this.dynamicCooperationBonus[i][k] = 0;
                this.dynamicLocScore[i][k] = 0;
                this.dynamicLinkStart[i][k] = 0;
                this.nextSpotPotential[i][k] = 0;
            }
        }
    }

    setNode(i, k, val) {
        this.grid[i][k] = val;
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

    UpdateGrid(grid) {
        this.gridA = grid;
    }
    AnalyzeGrid() {
        this.gridA.ConfigureGrid();
        let l2 = true,
            l1 = true,
            r1 = true,
            r2 = true;
        var DynamicCooperationLinks = 0;

        for (i = 0; i < 3; i++) {
            for (k = 0; k < 9; k++) {
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
        else {
            for (i = 0; i < 3; i++) {
                for (k = 3; k < 6; k++) {
                    if (this.gridA.grid[i][k] == false) {
                        this.gridA.dynamicCooperationBonus[i][k] = 0;
                    }
                }
            }
        }                    
        console.log("Point Potentials" + this.gridA.pointPotential);
        console.log("Dynamic Loc Score" + this.gridA.dynamicLocScore);
        console.log("Dynamic Cooperation Bonus" + this.gridA.dynamicCooperationBonus);
        console.log("Dynamic Link Loc" + this.gridA.dynamicLinkLoc);
        console.log("Point potential weight: " + this.ppw + ", Difficulty weight: " + this.dw + ", Location weight: " + this.lw + ", Cooperation bonus weight: " + this.cw + ", Link Location Weight: " + this.llw);
        console.log("Inputted grid: " + this.gridA.grid);
        for (i = 0; i < 3; i++) {
            for (k = 0; k < 9; k++) {
                if (this.gridA.grid[i][k] == true) {
                    this.gridA.outputGrid[i][k] = 0;
                } else {
                    let potentialVal = this.ppw * this.gridA.pointPotential[i][k] + this.dw/this.gridA.difficulty[i][k] + this.lw * this.gridA.dynamicLocScore[i][k] + this.cw * this.gridA.dynamicCooperationBonus[i][k] + this.llw * this.gridA.dynamicLinkLoc[i][k];
                    let potentialVal2 = 0,
                        val1 = 0;
                    if (this.gridA.dynamicCooperationBonus[i][k] == true && SumOfArray(this.gridA.dynamicCooperationBonus) == 0) {
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