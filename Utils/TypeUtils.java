package Utils;



public class TypeUtils {
    public static final int Boolean2Int(boolean b) {
        if (b == true) {
            return 1;
        }
        return 0;
    }

    public static final double Boolean2Double(boolean b) {
        if (b == true) {
            return 1.00d;
        }
        return 0.00d;
    }

    public static double round(double value, int places) {
        if (places < 0) throw new IllegalArgumentException();
    
        long factor = (long) Math.pow(10, places);
        value = value * factor;
        long tmp = Math.round(value);
        return (double) tmp / factor;
    }
}