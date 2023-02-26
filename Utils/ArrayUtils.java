package Utils;

import java.util.Arrays;

public class ArrayUtils {
    
    public static final String Array2String(boolean[][] array, int dimensions) {
        String s_array = "";
        int i,k;
        int length = array.length;
        boolean[] subArray = new boolean[length];
        for (i=0; i<dimensions; i++) {
            subArray = new boolean[length];
            for (k = 0; k<length; k++) {
                subArray[k] = array[k][i];
            }
            s_array+=Arrays.toString(subArray) + "\n";
        }
        return s_array;
    }

    public static final String Array2String(int[][] array, int dimensions) {
        String s_array = "";
        int i,k;
        int length = array.length;
        int[] subArray = new int[length];
        for (i=0; i<dimensions; i++) {
            subArray = new int[length];
            for (k = 0; k<length; k++) {
                subArray[k] = array[k][i];
            }
            s_array+=Arrays.toString(subArray) + "\n";
        }
        return s_array;
    }

    
    public static final String Array2String(double[][] array, int dimensions) {
        String s_array = "";
        int i,k;
        int length = array.length;
        double[] subArray = new double[length];
        for (i=0; i<dimensions; i++) {
            subArray = new double[length];
            for (k = 0; k<length; k++) {
                subArray[k] = array[k][i];
            }
            s_array+=Arrays.toString(subArray) + "\n";
        }
        return s_array;
    }

    public static final int SumOfArray(int [][] array, int dimensions) {
        int i,k;
        int sum = 0;
        for (i=0; i<dimensions; i++) {
            for (k=0; k<array.length; k++) {
                sum += array[k][i];
            }
        }
        return sum;
    }
}