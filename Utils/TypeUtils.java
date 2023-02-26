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
}