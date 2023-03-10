function gridClickHandler(a){
    var box = $("#"+a);
    if(box.css("background-color") == "rgb(0, 255, 0)"){
        box.css("background-color", "rgb(255, 0, 0)");
        box.addClass("gridboxRed");
        box.removeClass("gridboxGreen");
    }else if(box.css("background-color") == "rgb(255, 0, 0)"){
        box.css("background-color", "rgb(0, 255, 0)");
        box.addClass("gridboxGreen");
        box.removeClass("gridboxRed");
    }else{
        box.css("background-color", "rgb(0, 255, 0)");
        box.addClass("gridboxGreen");
    }
}

function colorToBoolean(){
    var box = $("#"+a)
if(box.css("background-color") == "rgb(0, 255, 0)"){
    var piecePlacedA1 = 1;
}else if(box.css("background-color") == "rgba(255, 0, 0)"){
    var piecePlacedA1 = 0;
}

}
function calculate(){
    var box = $("#"+a);

    
}

function printNextSpot(){
    var nextSpot = getNextSpot();
    $("#nextSpot").html(nextSpot);
}