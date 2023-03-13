import java.util.Scanner;


class Main {
  public static void main(String[] args) {
    Grid grid = new Grid();
    GridAnalyzer gAnalyzer = new GridAnalyzer(0.5d, 0.75d, 1.00d, 0.25d, 1.00d);
    gAnalyzer.AnalyzeGrid(grid, grid.CooperationBonus);
    System.out.println(grid.gridstring);
    System.out.println("---------- Point Potential ---------");
    System.out.println(grid.PointPotentialString);
    System.out.println("---------- Difficulty ---------");
    System.out.println(grid.DifficultyString);

    System.out.println("---------- Dynamic Loc Score ---------");

    System.out.println("--------- Settings ---------");
    System.out.println("Cooperation Bonus: " + grid.CooperationBonusString);

   
  }
}

  
