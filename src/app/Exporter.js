function GetRawEvents(){
        let text;
        let logs = document.getElementsByClassName('eventlog');
        for(var i = 0; i < logs.length; i++){
            text += logs[i].innerHTML;
        }
        return text;
}

function ExportData(){
    var ret = GetRawEvents().replace('undefined', "");
    ret.replace('<span class="event-timestamp"><strong>',"");
    ret.replace('</strong></span>',"");
    saves.push(ret);
    return ret;
}


let saves = [];



