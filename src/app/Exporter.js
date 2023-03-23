var scoreEvents = [];
var data;
function Score(pos, location){
    this.position = pos;
    this.location = location;
}

var input = document.getElementById("file-input");
input.addEventListener("change", () => {
    var reader = new FileReader();
    reader.onload = function(){
        console.log(reader.result);
        data = JSON.parse(reader.result);
        console.log(data);
        console.log(data.events);
        
        for(var i = 0; i < data.events.length; i++){
            if(data.events[i].eventType == "pieceScore"){
                scoreEvents.push(new Score(data.events[i].gridPosition, data.events[i].time));
            }
        }

        console.log(scoreEvents);
    }
    reader.readAsText(input.files[0]);
});


