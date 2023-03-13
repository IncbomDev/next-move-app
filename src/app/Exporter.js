class Exporter{
    export(){
        document.getElementById("export");
    }

    import() {
        var fileInput = document.getElementById("IMPORT");
        fileInput.addEventListener('change', (event) => {
            var file = event.target.files[0];
            var reader = new FileReader();
            reader.onload = function(event) {
                var contents = event.target.result;
                console.log("File contents: " + contents);
                return("File contents: " + contents);
            };
        });
    }
}

