import Utils.*;

public class GridAnalyzer {
    double ppw, dw, lw, cw, llw;

    double[][] calculatedScore = new double[9][3];
  
    public GridAnalyzer(double PointPotentialWeight, double DifficultyWeight, double LocationWeight, double CooperationWeight, double LinkLocationWeight) {
        ppw = PointPotentialWeight;
        dw = DifficultyWeight;
        lw = LocationWeight;
        cw = CooperationWeight;
        llw = LinkLocationWeight;
    }
    // k = x 
    // x = column

    /**
     * Reanalyzes inputted grid with initialized weights.
     * @param grid Grid to be analyzed
     * @param TeamScoredCoopertition True if the team scored coopertition points, false otherwise
     */
    public void AnalyzeGrid(Grid grid, boolean TeamScoredCoopertition) {
        int i,k,l;
        boolean l2 = true, l1 = true, r1 = true, r2 = true;
        int DynamicCooperationLinks = 0;
        for (i = 0; i<3; i++) {
            for (k = 0; k<9; k++) {
                switch(k) {
                    case 1:
                        l2 = false;
                        l1 = grid.grid[k-1][i];
                        r2 = grid.grid[k+2][i];
                        r1 = grid.grid[k+1][i];
                        break;
                    case 0:
                        l2 = false;
                        l1 = false;
                        r2 = grid.grid[k+2][i];
                        r1 = grid.grid[k+1][i];
                        break;
                    case 7:
                        r2 = false;
                        r1 = grid.grid[k+1][i];
                        l2 = grid.grid[k-2][i];
                        l1 = grid.grid[k-1][i];
                    case 8:
                        r2 = false;
                        r1 = false;
                        r2 = grid.grid[k-2][i];
                        r1 = grid.grid[k-1][i];
                        break; 

                    default:
                        l2 = grid.grid[k-2][i];
                        l1 = grid.grid[k-1][i];
                        r2 = grid.grid[k+2][i];
                        r1 = grid.grid[k+1][i];
                        break;
                    
                }
                grid.DynamicLocScore[k][i] = TypeUtils.Boolean2Double(l1)+TypeUtils.Boolean2Double(r1) + 0.5*(TypeUtils.Boolean2Double(l2) + TypeUtils.Boolean2Double(r2));
                grid.DynamicLinkLoc[k][i] = 0;

                if (k!=0 && TypeUtils.Boolean2Int(grid.grid[k][i])+TypeUtils.Boolean2Int(r1)+TypeUtils.Boolean2Int(r2)==3 && grid.DynamicLinkStart[k-1][i]==0) {
                    grid.DynamicLinkStart[k][i] = 1;
                }
                else if (k==0 && TypeUtils.Boolean2Int(grid.grid[k][i])+TypeUtils.Boolean2Int(r1)+TypeUtils.Boolean2Int(r2)==3) {
                    grid.DynamicLinkStart[k][i]=1;
                }
                else {
                    grid.DynamicLinkStart[k][i] = 0;
                }
            }
            if (TypeUtils.Boolean2Int(grid.grid[0][i])+TypeUtils.Boolean2Int(grid.grid[1][i])+TypeUtils.Boolean2Int(grid.grid[2][i]) == 2) {
                for (k = 0; k<k+3; k++) {
                    if (grid.grid[k][i] == false) {
                        grid.DynamicLinkLoc[k][i] = 1;
                    }
                }
            }
            
            else if (TypeUtils.Boolean2Int(grid.grid[3][i])+TypeUtils.Boolean2Int(grid.grid[4][i])+TypeUtils.Boolean2Int(grid.grid[5][i]) == 2) {
                for (k = 0; k<k+3; k++) {
                    if (grid.grid[k][i] == false) {
                        grid.DynamicLinkLoc[k][i] = 1;
                    }
                }
            }
            else if (TypeUtils.Boolean2Int(grid.grid[6][i])+TypeUtils.Boolean2Int(grid.grid[7][i])+TypeUtils.Boolean2Int(grid.grid[8][i]) == 2) {
                for (k = 0; k<k+3; k++) {
                    if (grid.grid[k][i] == false) {
                        grid.DynamicLinkLoc[k][i] = 1;
                    }
                }
            }
            for (l=3; l<=5; l++) {
               if (grid.grid[l][i] == true) {
                    DynamicCooperationLinks++;
               } 
            }
            
        }
        if (DynamicCooperationLinks < 3) {
            for (i = 0; i<3; i++) {
                for (k=3; k<=5; k++) {
                    grid.DynamicCooperationBonus[k][i] = 1;
                }
            }
        }
        for (i = 0; i<3; i++) {
            for (k=0;k<9;k++) {
                if (grid.grid[k][i]) {
                    grid.NextSpotPotential[k][i] = 0;
                }
                else {
                    double potentialVal = ppw*grid.PointPotential[k][i]+dw/grid.Difficulty[k][i]+lw*grid.DynamicLocScore[k][i]+cw*grid.DynamicCooperationBonus[k][i]+llw*grid.DynamicLinkLoc[k][i];
                    double potentialVal2 = 0.00d;
                    double val1=0.00d;
                    if (TeamScoredCoopertition && ArrayUtils.SumOfArray(grid.DynamicCooperationBonus,3) == 0) {
                        val1=5.00d;
                    }
                    else {val1=4.00d;}
                    if (ArrayUtils.SumOfArray(grid.DynamicLinkStart,3)<val1) {
                        potentialVal2=1;
                    }
                    else {
                        potentialVal2=0;
                    }
                    grid.NextSpotPotential[k][i]=TypeUtils.round(potentialVal*potentialVal2, 4);
                }
            }
        }
        double valueOfMax = ArrayUtils.MaxOfArray(grid.NextSpotPotential, 3);

        for (i=0; i<3; i++) {
            for (k=0; k<9; k++) {
                if (grid.NextSpotPotential[k][i] == valueOfMax) {
                    grid.nextGridPoint = new GridPoint(k, i, valueOfMax);
                }
            }
        }
        grid.updateStrings();
    }
}