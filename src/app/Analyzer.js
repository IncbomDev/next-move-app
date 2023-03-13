var bool = true;
var boolean = bool;

function Boolean2Double(boolean) {
    if (bool) {
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
    this.grid = grid;
  

  }
  AnalyzeGrid() {
    this.i,k,l;
    this.l2 = true, l1 = true, r1 = true, r2 = true;
    var DynamicCooperationLinks = 0;
    for (i = 0; i<3; i++) {
        for (k = 0; k<9; k++) {
            switch(k) {
                case 1:
                    l2 = false;
                    l1 = grid.grid[i][k-1];
                    r2 = grid.grid[i][k+2];
                    r1 = grid.grid[i][k+1];
                    break;
                case 0:
                    l2 = false;
                    l1 = false;
                    r2 = grid.grid[i][k+2];
                    r1 = grid.grid[i][k+1];
                    break;
                case 7:
                    r2 = false; 
                    r1 = grid.grid[i][k+1][i];
                    l2 = grid.grid[i][k-2][i];
                    l1 = grid.grid[i][k-1][i];
                    break;
                case 8:
                    r2 = false;
                    r1 = false;
                    l2 = grid.grid[k-2][i];
                    l1 = grid.grid[k-1][i];
                    break;
                default:
                    l2 = grid.grid[k-2][i];
                    l1 = grid.grid[k-1][i];
                    r2 = grid.grid[k+2][i];
                    r1 = grid.grid[k+1][i];
                    break;

            }
            this.grid.dynamicLocScores[i][k] = Boolean2Double(l1)+Boolean2Double(r1)+0.5*Boolean2Double(l2)+0.5*Boolean2Double(r2);
            this.grid.dynamicLinkLoc[i][k] = 0;

            if(k!=0 && Boolean2Int(this.grid.grid[i][k])+Boolean2Int(r1)+Boolean2Int(r2) == 3 && this.grid.dynamicLinkStart[i][k-1] == 0) {
                this.grid.dynamicLinkStart[i][k] = 1;
            }
            else if (k==0 && Boolean2Int(this.grid.grid[i][k])+Boolean2Int(r1)+Boolean2Int(r2) == 3) {
                this.grid.dynamicLinkStart[i][k] = 1;
            }
            else {
                this.grid.DynamicLinkStart[i][k] = 0;
            }
        }
        

    }
  }
}
