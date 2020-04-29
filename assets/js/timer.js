curTimer = {
    timeMins:25,
    timeSeconds:0,
    interval:25
};

updateTime = function(){
    if(curTimer.timeSeconds == 0){
        if(curTimer.timeMins == 0){
            console.log("done");
            curTimer.timeMins = curTimer.interval == 25 ? 5:25;
            curTimer.interval = curTimer.timeMins;
        }
        else{
            curTimer.timeMins--;
            curTimer.timeSeconds = 59;
        }
    }
    else curTimer.timeSeconds--;
    var timeMinsDisplay = curTimer.timeMins < 10 ?
                            "0" + curTimer.timeMins:
                            curTimer.timeMins;
    var timeSecondsDisplay = curTimer.timeSeconds < 10 ?
                            "0" + curTimer.timeSeconds:
                            curTimer.timeSeconds;
    console.log(timeMinsDisplay + ":" + timeSecondsDisplay);
}

setInterval(updateTime, 1000)