var timer = 0;
var on = false;
var phase = "auto";
var recording = false;
var TempLog = "";
var saves = [];

function Event(ts, ev){
    this.ts = ts;
    this.ev = ev;
}
function LogEvent(e){
    if(on){
        document.getElementById("liveEvents-inner").innerHTML += `<p class="eventlog"><span class='event-timestamp'><strong>${Timestamp()}
        </strong></span>${e}</p>`
        TempLog += `[T]${Timestamp()}[E]${e},`;
        TempLog.replaceAll("undefined", "");
        console.log(TempLog);
    }
}
function DeletePreviousEvent(){
    try{
        document.getElementById("liveEvents-inner").removeChild(document.getElementById("liveEvents-inner").lastChild);
    }catch(e){
        console.log("No previous event to delete");
    }
}
function start(){
    on = true;
    LogEvent("Match started");
}
function stop(){
    on = false;
    TempLog.replaceAll("undefined", "");
    saves.push(TempLog);
    TempLog="";
    $("#gui")[0].classList.add("alert");
    setTimeout(() => {
        $("#gui")[0].classList.remove("alert");
    }, 3000);
}
function stopreset(){
    on = false;
    timer = 0;
    TempLog.replaceAll("undefined", "");
    saves.push(TempLog);
    TempLog="";
    $("#gui")[0].classList.add("alert");
    setTimeout(() => {
        $("#gui")[0].classList.remove("alert");
    }, 3000);
}
function EvalSave(s){
    let r = [];
    let save = s.toString();
    for(var i = 0; i < save.length; i++){
        if(save.charAt(i)+save.charAt(i+1)+save.charAt(i+2) == "[T]"){
            let tempEvent = new Event();
            let eventStr = "";
            tempEvent.ts = save.substring(i+3,i+7);
            let e = i+11;
            while(save.charAt(e) != "["){
                eventStr += save.charAt(e)
                e++;
            }
            tempEvent.ev = eventStr;
            r.push(tempEvent);
        }
    }
    return r;
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