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

function tab(t){
    if(t == "options"){
        $("#header-tabs-options").css("display", "block");
        $("#header-tabs-file").css("display", "none");
        $("#header-tabs-more").css("display", "none");

        $("#optionsTab").addClass("selected");
        $("#gridTab").removeClass("selected");
        $("#moreTab").removeClass("selected");
    }else if(t == "file"){
        $("#header-tabs-options").css("display", "none");
        $("#header-tabs-file").css("display", "block");
        $("#header-tabs-more").css("display", "none");

        $("#optionsTab").removeClass("selected");
        $("#fileTab").addClass("selected");
        $("#moreTab").removeClass("selected");
    }else if(t == "more"){
        $("#header-tabs-options").css("display", "none");
        $("#header-tabs-file").css("display", "none");
        $("#header-tabs-more").css("display", "block");

        $("#optionsTab").removeClass("selected");
        $("#fileTab").removeClass("selected");
        $("#moreTab").addClass("selected");
    }
}