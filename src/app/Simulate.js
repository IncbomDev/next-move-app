var timer = 0;
var on = false;
var phase = "auto";
var recording = false;

function LogEvent(e){
    if(on){
        document.getElementById("liveEvents-inner").innerHTML += `<p class="eventlog"><span class='event-timestamp'><strong>${Timestamp()}
        </strong></span>${e}</p>`
    }
}
function DeletePreviousEvent(){
    document.getElementById("liveEvents-inner").removeChild(document.getElementById("liveEvents-inner").lastChild);
}
function start(){
    on = true;
    LogEvent("Match started");
}
function stop(){
    on = false;
}
function stopreset(){
    on = false;
    timer = 0;
}
function EvalSeconds(sec){
    if(sec < 10){
        return "0" + sec;
    }else if(sec > 59){
        let s = sec - 60;
        if(s < 10){
            return "0" + s;
        }else{
            return s;
        }
    }else{
        return sec;
    }
}
function Timestamp(){
    return Math.floor(timer/60)+":"+EvalSeconds(timer);
}
setInterval(() => {
    if(on){
        document.getElementById("recDisplay").innerHTML = "Recording...";
        $("#live-events-title").css("color", "red");
    }else{
        document.getElementById("recDisplay").innerHTML = "Recording is off...";
        $("#live-events-title").css("color", "white");
    }
}, 1);
setInterval(() => {
    if(on){
        timer++;
    }
    document.getElementById("timer").innerHTML = Math.floor(timer/60)+":"+EvalSeconds(timer);
    if(timer == 90){
        stop();
    }

    if(timer <= 15){
        phase = "auto";
    }else{
        phase = "teleop";
    }

    if(phase == "auto"){
        document.getElementById("phase").innerHTML = "AUTONOMOUS";
    }else if(phase == "teleop"){
        document.getElementById("phase").innerHTML = "TELEOPERATED";
    }
}, 1000);