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
        } else {
            arr.push(true);
        }
    }
    console.log("Obtained grid: " + arr);
    return arr;
}

function GStoHex(gs){
    if (gs == GA.bestPtVal) {
        return " #0098ff";
    }
    if (gs == 0) {
        return "#FF0000";
    }
    if(gs < 1){
        return "#ff8166";
    }else if(1 <= gs && gs < 1.75){
        return "#b6f2c1";
    }else if(1.75 <= gs && gs < 2.25){
        return "#74eb6e";
    }else if(2.25 <= gs && gs < 2.75){
        return "#56EE4E";
    }else if(2.75 <= gs){
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

function coopertitionBonus(){
    if($("#checkbox").css("background-color") == "rgb(255, 255, 255)"){
        $("#checkbox").css("background-color", "rgb(255, 204, 0)");
        GRID.cooperationBonus = true;
    } else {
        $("#checkbox").css("background-color", "rgb(255, 255, 255)");
        GRID.cooperationBonus = false;
    }
}

function RenderNewGrid(grid) {
    for(var i = 1; i < 4; i++)
    for(var k = 1; k < 10; k++){
        if (i == 3 && k == 1) {
            console.log("Broken:" + GStoHex(grid[i-1][k-1]))
            console.log("Broken val: " + grid[i-1][k-1]);
        }
        $(`#nextGrid${conv(i) + k}`).css("background-color", GStoHex(grid[i-1][k-1]));
    }
}

function gridClickHandler(a){
    var box = $("#"+a);
    var val;
    if(box.css("background-color") == GREEN){
        box.css("background-color", RED);
        box.addClass("gridboxRed");
        box.removeClass("gridboxGreen");
        val = false;
        DeletePreviousEvent();
    }else if(box.css("background-color") == RED){
        box.css("background-color", GREEN);
        box.addClass("gridboxGreen");
        val = true;
        
        LogEvent("Piece scored");
    }else{
        box.css("background-color", GREEN);
        box.addClass("gridboxGreen");
        val = true;
    }
    var newGrid = new Grid();
    newGrid.grid = GRID.grid;
    GRID = newGrid;
    var newgrid = GRID.grid;
    newgrid[reverseconv(a[3]) - 1][parseInt(a[4]) - 1] = val; 
    GRID.grid = newgrid;
    GA.gridA = GRID;
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
        $("#header-tabs-simulate").css("display", "none");

        $("#optionsTab").addClass("selected");
        $("#gridTab").removeClass("selected");
        $("#moreTab").removeClass("selected");
        $("#simulateTab").removeClass("selected");
    }else if(t == "file"){
        $("#header-tabs-options").css("display", "none");
        $("#header-tabs-file").css("display", "block");
        $("#header-tabs-more").css("display", "none");
        $("#header-tabs-simulate").css("display", "none");

        $("#optionsTab").removeClass("selected");
        $("#fileTab").addClass("selected");
        $("#moreTab").removeClass("selected");
        $("#simulateTab").removeClass("selected");
    }else if(t == "more"){
        $("#header-tabs-options").css("display", "none");
        $("#header-tabs-file").css("display", "none");
        $("#header-tabs-more").css("display", "flex");
        $("#header-tabs-simulate").css("display", "none");

        $("#optionsTab").removeClass("selected");
        $("#fileTab").removeClass("selected");
        $("#moreTab").addClass("selected");
        $("#simulateTab").removeClass("selected");
    }else if(t == "simulate"){
        $("#header-tabs-options").css("display", "none");
        $("#header-tabs-file").css("display", "none");
        $("#header-tabs-more").css("display", "none");
        $("#header-tabs-simulate").css("display", "block");

        $("#optionsTab").removeClass("selected");
        $("#fileTab").removeClass("selected");
        $("#moreTab").removeClass("selected");
        $("#simulateTab").addClass("selected");
    }
}

window.onload = function(){ 
    GA.AnalyzeGrid();
    RenderNewGrid(GA.gridA.outputGrid);
}

function theme(t){
    if(t == "light"){
        document.documentElement.style.setProperty("--header-color", "rgb(244, 244, 244)");
        document.documentElement.style.setProperty("--header-border", "1px solid rgb(200, 200, 200)");
        document.documentElement.style.setProperty("--text-color", "black");
        document.documentElement.style.setProperty("--bg-color", "white");
        document.documentElement.style.setProperty("--button-hover", "rgb(230, 230, 230)");
        document.documentElement.style.setProperty("--button-selected", "rgb(220, 220, 220)");
    }else if(t == "dark"){
        document.documentElement.style.setProperty("--header-color", "rgb(40, 40, 40)");
        document.documentElement.style.setProperty("--header-border", "1px solid white");
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty("--bg-color", "rgb(20, 20, 20)");
        document.documentElement.style.setProperty("--button-hover", "rgb(60, 60, 60)");
        document.documentElement.style.setProperty("--button-selected", "gray");
    }else if(t == "ocean"){
        document.documentElement.style.setProperty("--header-color", "#11d1b1");
        document.documentElement.style.setProperty("--header-border", "1px solid white");
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty("--bg-color", "#129983");
        document.documentElement.style.setProperty("--button-hover", "#16b89d");
        document.documentElement.style.setProperty("--button-selected", "#13f0cb");
    }else if(t == "pink"){
        document.documentElement.style.setProperty("--header-color", "#ffd1f9");
        document.documentElement.style.setProperty("--header-border", "1px solid white");
        document.documentElement.style.setProperty("--text-color", "black");
        document.documentElement.style.setProperty("--bg-color", "white");
        document.documentElement.style.setProperty("--button-hover", "#ffabf4");
        document.documentElement.style.setProperty("--button-selected", "#ff7aed");
    }else if(t == "solarized-dark"){
        document.documentElement.style.setProperty("--header-color", "#002b36");
        document.documentElement.style.setProperty("--header-border", "1px solid white");
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty("--bg-color", "#073642");
        document.documentElement.style.setProperty("--button-hover", "#3e756f");
        document.documentElement.style.setProperty("--button-selected", "#586e75");
    }else if(t == "monochrome"){
        document.documentElement.style.setProperty("--header-color", "#000000");
        document.documentElement.style.setProperty("--header-border", "1px solid gray");
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty("--bg-color", "#000000");
        document.documentElement.style.setProperty("--button-hover", "rgb(20, 20, 20)");
        document.documentElement.style.setProperty("--button-selected", "rgb(40, 40, 40)");
    }else if(t == "solarized-light"){
        document.documentElement.style.setProperty("--header-color", "#fdf6e3");
        document.documentElement.style.setProperty("--header-border", "1px solid black");
        document.documentElement.style.setProperty("--text-color", "black");
        document.documentElement.style.setProperty("--bg-color", "#eee8d5");
        document.documentElement.style.setProperty("--button-hover", "#fff4c4");
        document.documentElement.style.setProperty("--button-selected", "#eee8d5");
    }
}