function gridClickHandlerHybrid(a){
    var box = $("#"+a);
    if(box.css("background-color") == RED){
        box.css("background-color", ORANGE);
        box.addClass("gridboxOrange");
        box.removeClass("gridboxRed");
    }else if(box.css("background-color") == ORANGE){
        box.css("background-color", PURPLE);
        box.addClass("gridboxPurple");
        box.removeClass("gridboxOrange");
    }else if (box.css("background-color") == "rgb(235, 9, 212)"){
        box.css("background-color", RED);
        box.addClass("gridboxRed");
    }
    updateGrid();
    calculateCooperationBonus();
    
}
function gridClickHandler(a){
    var box = $("#"+a);
    if(box.css("background-color") == GREEN){
        box.css("background-color", RED);
        box.addClass("gridboxRed");
        box.removeClass("gridboxGreen");
        
    }else if(box.css("background-color") == RED){
        box.css("background-color", GREEN);
        box.addClass("gridboxGreen");
    }else{
        box.css("background-color", GREEN);
        box.addClass("gridboxGreen");
    }
    updateGrid();
    calculateCooperationBonus();
}

function printNextSpot(){
    var nextSpot = getNextSpot();
    $("#nextSpot").html(nextSpot);
}