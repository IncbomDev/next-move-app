module com.spike {
    requires javafx.controls;
    requires javafx.fxml;

    opens com.spike to javafx.fxml;
    exports com.spike;
}
