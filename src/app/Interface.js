//setup analyzer
//test arrs

/*
var TestGrid = [true, false, false, true, false, false, true, false, false, true, false, false, true, false, false, true, false, false, true, false, false, true, false, false, true, false, false ];
var TestGrid2 = [true, false, true, true, false, true, true, false, true, true, false, true, true, false, true, true, false, true, true, false, true, true, false, true, true, false, true ];
var TestGrid3 = [false, true, false, false, true, false, false, true, false, false, true, false, false, true, false, false, true, false, false, true, false, false, true, false, false, true, false ];

var GridSampleA = new Grid(TestGrid);
var GridSampleB = new Grid(TestGrid2);
var GridSampleC = new Grid(TestGrid3);

var testAnalyzer = new GridAnalyzer(GridSampleA, 0.5, 0.75, 1, 0.25, 1);
var testAnalyzerB = new GridAnalyzer(GridSampleB, 0.5, 0.75, 1, 0.25, 1);
var testAnalyzerC = new GridAnalyzer(GridSampleC, 0.5, 0.75, 1, 0.25, 1);

//console.log(analyzer.gridA);
//analyzer.AnalyzeGrid();
*/
var GRID = new Grid();
var GA = new GridAnalyzer(new Grid(), 0.5, 0.75, 1, 0.25, 1);
//get T/F values from current grid.
function GetBooleanValues(){
    var arr = [];
    for(var i = 1; i < 4; i++)
    for(var k = 1; k < 10; k++){
        if ($("#box"+conv(i)+k).css("background-color") == RED) {
            arr.push(false);
        }
        else {
            arr.push(true);
        }
    }
    console.log("Obtained grid" + arr);
    return arr;
}

function GStoHex(gs){
    if(gs < 1){
        return "#ffffff";
    }else if(1 < gs && gs < 1.75){
        return "#b6f2c1";
    }else if(1.75 < gs && gs < 2.25){
        return "#74eb6e";
    }else if(2.25 < gs && gs < 2.75){
        return "#56EE4E";
    }else if(2.75 < gs){
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
function reverseconv(letter) {
    if (letter == 'A') {
        return 1;
    } else if (letter == 'B') {
        return 2;
    } else {
        return 3;
    }
}
function RenderNewGrid(grid) {
    for(var i = 1; i < 4; i++)
    for(var k = 1; k < 10; k++){
        $(`#nextGrid${conv(i) + k}`).css("background-color", GStoHex(grid[i-1][k-1]));
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
    RenderNewGrid(new GridAnalyzer(new Grid(GetBooleanValues()), 0.5, 0.75, 1, 0.25, 1).AnalyzeGrid());
}
function gridClickHandler(a){
    var box = $("#"+a);
    if(box.css("background-color") == GREEN){
        box.css("background-color", RED);
        box.addClass("gridboxRed");
        box.removeClass("gridboxGreen");
        GRID.setNode(reverseconv(a[3])-1, a[4]-1, false);
        
    }else if(box.css("background-color") == RED){
        box.css("background-color", GREEN);
        box.addClass("gridboxGreen");
        GRID.setNode(reverseconv(a[3])-1, a[4]-1, true);
    }else{
        box.css("background-color", GREEN);
        box.addClass("gridboxGreen");
        GRID.setNode(reverseconv(a[3])-1, a[4]-1, true);
    }
    GA.UpdateGrid(GRID);
    GA.AnalyzeGrid();
    RenderNewGrid(GRID.outputGrid);
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