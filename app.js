


function increment(element){
    var time = document.querySelector('#time').innerHTML;
    time = time.substring(3);
    if(time > 0){
        element.value = parseInt(element.value) + 1;
    }
    
 }




function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            newScore = parseInt(document.getElementById('currentScore').value);
            bestScore = document.getElementById('bestScore').innerHTML;
            bestScore = bestScore.substring(19);
            bestScore = parseInt(bestScore);
        
            if(newScore > bestScore ){
                document.getElementById('bestScore').innerHTML = "Your Best Score is " + newScore;
            }
            document.getElementById('currentScore').value = 0;
            timer = duration;
        }
    }, 1000);
}



window.onload = function () {
    var time = 10,
        display = document.querySelector('#time');
    startTimer(time, display);
    loadFinished = true;

};











