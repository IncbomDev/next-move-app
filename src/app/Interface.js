function gridClickHandlerHybrid(a){
    var box = $("#"+a);
    if(box.css("background-color") == "rgb(255,0,0)"){
        box.css("background-color", "rgb(201, 98, 1)");
        box.addClass("gridboxOrange");
        box.removeClass("gridboxRed");
        colorToBoolean();
    }else if(box.css("background-color") == "rgb(201, 98, 1)"){
        box.css("background-color", "rgb(235, 9, 212)");
        box.addClass("gridboxPurple");
        box.removeClass("gridboxOrange");
        colorToInt();
    }else if (box.css("background-color") == "rgb(235, 9, 212)"){
        box.css("background-color", "rgb(0, 255, 0)");
        box.addClass("gridboxRed");
        colorToInt();
    }
}
function gridClickHandler(a){
    var box = $("#"+a);
    if(box.css("background-color") == "rgb(0, 255, 0)"){
        box.css("background-color", "rgb(255, 0, 0)");
        box.addClass("gridboxRed");
        box.removeClass("gridboxGreen");
    }else if(box.css("background-color") == "rgb(255, 0, 0)"){
        box.css("background-color", "rgb(0, 255, 0)");
        box.addClass("gridboxGreen");
    }else{
        box.css("background-color", "rgb(0, 255, 0)");
        box.addClass("gridboxGreen");
    }
}
function colorToInt(){
    const A1 = document.getElementById("A1").getComputedStyle("background-color");

if(A1 === "rgb(0, 255, 0)"){
    var piecePlacedA1 = 1;
    alert(piecePlacedA1);
}else if(A1 === "rgb(255, 0, 0)"){
    var piecePlacedA1 = 0;  
    alert(piecePlacedA1);
}

}
function calculate(){
    var box = $("#"+a);

    
}

function printNextSpot(){
    var nextSpot = getNextSpot();
    $("#nextSpot").html(nextSpot);
}