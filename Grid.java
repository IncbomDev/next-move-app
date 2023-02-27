import java.util.Arrays;
import Utils.ArrayUtils; 

public class Grid {
	public boolean[][] grid = new boolean[9][3];
	public GridPoint nextGridPoint = new GridPoint(0,0, 0.00d);
	public static final int TOP_INDEX = 0;
	public static final int MID_INDEX = 1;
	public static final int BOTTOM_INDEX = 2;
	
	public String gridstring = ArrayUtils.Array2String(grid,3);

	//#region VariousArraysAndStrings
	public final int[][] PointPotential = new int[9][3];
	public String PointPotentialString = ArrayUtils.Array2String(PointPotential,3);
	
	public final int[][] Difficulty = {{7,4,1}, {7,4,1}, {8,5,2}, {9,6,3}, {10,7,4}, {9,6,3}, {8,5,2}, {7,4,1}, {7,4,1} /*{7,7,8,9,10,9,8,7,7},{4,4,5,6,7,6,5,4,4}, {1,2,2,3,4,3,2,2,1}*/};
	public String DifficultyString = ArrayUtils.Array2String(PointPotential,3);

	public double[][] DynamicLocScore = new double[9][3];
	public String DynamicLocScoreString = ArrayUtils.Array2String(DynamicLocScore,3);

	public int[][] DynamicLinkLoc = new int[9][3];
	public String DynamicLinkLocString = ArrayUtils.Array2String(DynamicLocScore,3);

	public int[][] DynamicCooperationBonus = new int[9][3];
	public String DynamicCooperationBonusString = ArrayUtils.Array2String(DynamicCooperationBonus, 3);

	public int[][] DynamicLinkStart ={{0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}, {0,0,0}};
	public String DynamicLinkStartString = ArrayUtils.Array2String(DynamicLinkStart, 3);

	public double[][] NextSpotPotential = new double[9][3];
	public String NextSpotPotentialString = ArrayUtils.Array2String(NextSpotPotential, 3);

	public boolean CooperationBonus = false; // Turn to true if the cooperation bonus is active

	public String CooperationBonusString = Boolean.toString(CooperationBonus);

	//#endregion
	public Grid() {
		int i,k, val;
		for (i=0; i<3; i++) {
			for (k=0; k<PointPotential.length; k++) {
				switch (i) {
					case 0:
						val=5;
						break;
					case 1:
						val=3;
						break;
					case 2:
						val=2;
						break;
					default:
						val = 0;
						break;
				}
				PointPotential[k][i] = val; 
			}
		}
		PointPotentialString = ArrayUtils.Array2String(PointPotential,3);
	}
	/**
	 * Sets the node at the specified row and column to the specified value
	 * @param row Row to set value at (Use TOP_INDEX, MID_INDEX, or BOTTOM_INDEX constants)
	 * @param column Column to set value at (1-9)
	 * @param value Value to set node to (true or false)
	 */
	public void setNode(int row, int column, boolean value) {
		if (column < 0) throw new java.lang.RuntimeException("Column greater than 0. Column passed: " + column);
		if (column > 8) throw new java.lang.RuntimeException("Column greater than 0. Column passed: " + column);
		
		switch (row) {
			case TOP_INDEX:
				grid[column-1][TOP_INDEX] = value;
				break;
			case MID_INDEX:
				grid[column-1][MID_INDEX] = value;
				break;
			case BOTTOM_INDEX:
				grid[column-1][BOTTOM_INDEX] = value;
				break;
		}
		updateStrings();
    }

	public void updateStrings() {
		String gridstring = ArrayUtils.Array2String(grid, 3);
		PointPotentialString = ArrayUtils.Array2String(PointPotential,3);
		DifficultyString = ArrayUtils.Array2String(PointPotential,3);
		DynamicLocScoreString = ArrayUtils.Array2String(DynamicLocScore,3);
		DynamicLinkLocString = ArrayUtils.Array2String(DynamicLocScore,3);
		DynamicCooperationBonusString = ArrayUtils.Array2String(DynamicCooperationBonus, 3);
		DynamicLinkStartString = ArrayUtils.Array2String(DynamicLinkStart, 3);
		NextSpotPotentialString = ArrayUtils.Array2String(NextSpotPotential, 3);
		CooperationBonusString = Boolean.toString(CooperationBonus);
	}

	public String toString() {
		String retval = "GRID: {\n";
		retval += gridstring;
		return retval;
	}

}

 class GridPoint {
	public int xindex, yindex;
	public double score;
	public GridPoint(int xi, int yi, double setscore) {
		xindex = xi;
		yindex = yi;
		score = setscore;
	}

	public final double GetScore() {
		return score;
	}
	public final int GetXPos() {
		return xindex+1;
	}
	public final int GetYPos() {
		return yindex+1;
	}
}
