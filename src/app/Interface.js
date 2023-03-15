//get T/F values from current grid.
function GetBooleanValues(){
}
var TestGrid = [true, false, false, true, false, false, true, false, false, true, false, false, true, false, false, true, false, false, true, false, false, true, false, false, true, false, false, ];
var analyzer = new GridAnalyzer(TestGrid);
function GStoHex(gs){
    if(gs < 1){
        return "#ffffff";
    }else if(1 < gs && gs < 2){
        return "#b6f2c1";
    }else if(2 < gs && gs < 2.5){
        return "#74eb6e";
    }else if(2.5 < gs){
        return "#37f02e";
    }
}
function conv(num){
    if(num == 1){
        return 'A';
    }else if(num == 2){
        return 'B';
    }else{
        return 'C';
    }
}
function RenderNewGrid(a) {
    for(var i = 1; i < 4; i++)
    for(var k = 1; k < 10; k++){
        $(`#nextGrid${conv(i) + k}`).css("background-color", GStoHex(a[i*k]));
    }
}

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
    analyzer.AnalyzeGrid();
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
    analyzer.AnalyzeGrid();
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