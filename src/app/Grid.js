class GridBox{
    constructor(color, piecePlaced, pointPotential, difficultyScore, dynamicCooperationBonus){
        this.color = color;
        this.piecePlaced = piecePlaced;
        this.pointPotential = pointPotential;
        this.difficultyScore = difficultyScore;
    }
}

// Constants
const pointPotential = 0.5;
const difficulty = 0.75;
const locationConst = 1;
const cooperation = 0.25
const linkLocation = 1;

function dynamicLocationScore() {
    let A1dynamicLocationScore;
    let A2dynamicLocationScore;
    let A3dynamicLocationScore;
    let A4dynamicLocationScore;
    let A5dynamicLocationScore;
    let A6dynamicLocationScore;
    let A7dynamicLocationScore;
    let A8dynamicLocationScore;
    let A9dynamicLocationScore;

    let B1dynamicLocationScore;
    let B2dynamicLocationScore;
    let B3dynamicLocationScore;
    let B4dynamicLocationScore;
    let B5dynamicLocationScore;
    let B6dynamicLocationScore;
    let B7dynamicLocationScore;
    let B8dynamicLocationScore;
    let B9dynamicLocationScore;

    let C1dynamicLocationScore;
    let C2dynamicLocationScore;
    let C3dynamicLocationScore;
    let C4dynamicLocationScore;
    let C5dynamicLocationScore;
    let C6dynamicLocationScore;
    let C7dynamicLocationScore;
    let C8dynamicLocationScore;
    let C9dynamicLocationScore;

    if(toIntA1 > 0) {
        A1dynamicLocationScore = 0;
    } else {
        A1dynamicLocationScore = (toIntA2) + (toIntA3 / 2)
    }

    if(toIntA2 > 0) {
        A2dynamicLocationScore = 0;
    } else {
        A2dynamicLocationScore = (toIntA1 + toIntA3) + (toIntA4 / 2)
    }

    if(toIntA3 > 0) {
        A3dynamicLocationScore = 0;
    } else {
        A3dynamicLocationScore = (toIntA2 + toIntA4) + ((toIntA5 / 2) + (toIntA1 / 2))
    }

    if(toIntA4 > 0) {
        A4dynamicLocationScore = 0;
    } else {
        A4dynamicLocationScore = (toIntA3 + toIntA5) + ((toIntA6 / 2) + (toIntA2 / 2))
    }
}
function calculateCooperationBonus() {
    let A4bonus;
    let A5bonus;
    let A6bonus;

    let B4bonus;
    let B5bonus;
    let B6bonus;

    let C4bonus;
    let C5bonus;
    let C6bonus;

    if(toIntA1 + toIntA2 + toIntA3 + toIntB1 + toIntB2 + toIntB3 + toIntC1 + toIntC2 + toIntC3<3){
        A4bonus = 1;
        A5bonus = 1;
        A6bonus = 1;

        B4bonus = 1;
        B5bonus = 1;
        B6bonus = 1;

        C4bonus = 1;
        C5bonus = 1;
        C6bonus = 1;
    } else {
        A4bonus = 0;
        A5bonus = 0;
        A6bonus = 0;

        B4bonus = 0;
        B5bonus = 0;
        B6bonus = 0;

        C4bonus = 0;
        C5bonus = 0;
        C6bonus = 0;
    } return {
        A4bonus: A4bonus,
        A5bonus: A5bonus,
        A6bonus: A6bonus,
        B4bonus: B4bonus,
        B5bonus: B5bonus,
        B6bonus: B6bonus,
        C4bonus: C4bonus,
        C5bonus: C5bonus,
        C6bonus: C6bonus
    }
}


var toIntA1;
var toIntA2;
var toIntA3;
var toIntA4;
var toIntA5;
var toIntA6;
var toIntA7;
var toIntA8;
var toIntA9;

var toIntB1;
var toIntB2;
var toIntB3;
var toIntB4;
var toIntB5;
var toIntB6;
var toIntB7;
var toIntB8;
var toIntB9;

var toIntC1;
var toIntC2;
var toIntC3;
var toIntC4;
var toIntC5;
var toIntC6;
var toIntC7;
var toIntC8;
var toIntC9;

var bonus = calculateCooperationBonus();

var A1 = new GridBox("red", false, 5, 7, 0);var A2 = new GridBox("red", false, 5, 7, 0);var A3 = new GridBox("red", false, 5, 8, 0);
var A4 = new GridBox("red", false, 5, 9, bonus.A4bonus); var A5 = new GridBox("red", false, 5, 10, bonus.A5bonus);var A6 = new GridBox("red", false, 5, 9, bonus.A6bonus);
var A7 = new GridBox("red", false, 5, 8, 0);var A8 = new GridBox("red", false, 5, 7, 0);var A9 = new GridBox("red", false, 5, 7, 0);
var B1 = new GridBox("red", false, 3, 4, 0);var B2 = new GridBox("red", false, 3, 4, 0);var B3 = new GridBox("red", false, 3, 5, 0);
var B4 = new GridBox("red", false, 3, 6, bonus.B4bonus);var B5 = new GridBox("red", false, 3, 7, bonus.B5bonus);var B6 = new GridBox("red", false, 3, 6, bonus.B6bonus);
var B7 = new GridBox("red", false, 3, 5, 0);var B8 = new GridBox("red", false, 3, 4, 0);var B9 = new GridBox("red", false, 3, 4, 0);
var C1 = new GridBox("red", false, 2, 1, 0);var C2 = new GridBox("red", false, 2, 2, 0);var C3 = new GridBox("red", false, 2, 2, 0);
var C4 = new GridBox("red", false, 2, 3, bonus.C4bonus);var C5 = new GridBox("red", false, 2, 4, bonus.C5bonus);var C6 = new GridBox("red", false, 2, 3, bonus.C6bonus);
var C7 = new GridBox("red", false, 2, 2, 0);var C8 = new GridBox("red", false, 2, 2, 0);var C9 = new GridBox("red", false, 2,1, 0);

var gridArray = [A1, A2, A3, A4, A5, A6, A7, A8, A9, B1, B2, B3, B4, B5, B6, B7, B8, B9, C1, C2, C3, C4, C5, C6, C7, C8, C9];
var letters = ["A", "B", "C"];
var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var colors = ["red", "green", "orange", "purple"];


function updateGrid() {
    for (var i = 0; i < 3; i++) {for(var j = 0; j < 9; j++){
    for(var k = 0; k < 3; k++){var CL = document.getElementById(`box${letters[i]}${nums[j]}`).classList;
    if(CL.contains(`gridbox${colors[k].charAt(0).toUpperCase() + colors[k].slice(1)}`)){
    eval(letters[i]+nums[j]).color = colors[k];}}}}

    var NextSpotA1 = $("#nextGridA1"); //.getComputedStyle("background-color");
    var NextSpotA2 = $("#nextGridA2");
    var NextSpotA3 = $("#nextGridA3");
    var NextSpotA4 = $("#nextGridA4");
    var NextSpotA5 = $("#nextGridA5");
    var NextSpotA6 = $("#nextGridA6");
    var NextSpotA7 = $("#nextGridA7");
    var NextSpotA8 = $("#nextGridA8");
    var NextSpotA9 = $("#nextGridA9");

    var NextSpotB1 = $("#nextGridB1");
    var NextSpotB2 = $("#nextGridB2");
    var NextSpotB3 = $("#nextGridB3");
    var NextSpotB4 = $("#nextGridB4");
    var NextSpotB5 = $("#nextGridB5");
    var NextSpotB6 = $("#nextGridB6");
    var NextSpotB7 = $("#nextGridB7");
    var NextSpotB8 = $("#nextGridB8");
    var NextSpotB9 = $("#nextGridB9");

    var NextSpotC1 = $("#nextGridC1");
    var NextSpotC2 = $("#nextGridC2");
    var NextSpotC3 = $("#nextGridC3");
    var NextSpotC4 = $("#nextGridC4");
    var NextSpotC5 = $("#nextGridC5");
    var NextSpotC6 = $("#nextGridC6");
    var NextSpotC7 = $("#nextGridC7");
    var NextSpotC8 = $("#nextGridC8");
    var NextSpotC9 = $("#nextGridC9");


    if(A1.color == "green"){
        NextSpotA1.css("background-color", RED);
        toIntA1 = 1;
    } else if(A1.color == "red"){
        toIntA1 = 0;
        NextSpotA1 = (pointPotential * toIntA1) + (difficulty * A1.pointPotential) + (locationConst * A1.difficultyScore) + (cooperation)

    }

    if(A2.color == "orange" || A2.color == "purple"){
        NextSpotA2.css("background-color", RED);
        toIntA2 = 1;
    } else if(A2.color == "red"){
        toIntA2 = 0;
        // continue with calc
    }

    if(A3.color == "green"){
        NextSpotA3.css("background-color", RED);
        toIntA3 = 1;
    } else if(A3.color == "red"){
        toIntA3 = 0;
        // continue with calc
    }

    if(A4.color == "green"){
        NextSpotA4.css("background-color", RED);
        toIntA4 = 1;
    } else if(A4.color == "red"){
        toIntA4 = 0;
        // continue with calc
    }

    if(A5.color == "orange" || A5.color == "purple"){
        NextSpotA5.css("background-color", RED);
        toIntA5 = 1;
    } else if(A5.color == "red"){
        toIntA5 = 0;
        // continue with calc
    }

    if(A6.color == "green"){
        NextSpotA6.css("background-color", RED);
        toIntA6 = 1;
    } else if(A6.color == "red"){
        toIntA6 = 0;
        // continue with calc
    }

    if(A7.color == "green"){
        NextSpotA7.css("background-color", RED);
        toIntA7 = 1;
    } else if(A7.color == "red"){
        toIntA7 = 0;
        // continue with calc
    }

    if(A8.color == "orange" || A8.color == "purple"){
        NextSpotA8.css("background-color", RED);
        toIntA8 = 1;
    } else if(A8.color == "red"){
        toIntA8 = 0;
        // continue with calc
    }

    if(A9.color == "green"){
        NextSpotA9.css("background-color", RED);
        toIntA9 = 1;
    } else if(A9.color == "red"){
        toIntA9 = 0;
        // continue with calc
    }


    if(A3.color == "green"){
        NextSpotA3.css("background-color", RED);
        toIntA3 = 1;
    } else if(A3.color == "red"){
        toIntA3 = 0;
        // continue with calc
    }


}

function colorToNumber(col) {
    if(col == "red"){
        return 0;
    }else if(col == "green"){
        return 1;
    }else if(col == "orange"){
        return 2;
    }else if(col == "purple"){
        return 3;
    }
}


