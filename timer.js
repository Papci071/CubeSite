    const stackmat = new Stackmat();
    
    stackmat.on('started', packet => {
        console.log('Timer started') 
        resetTimer()
        startTimer() 
        sigma=1 
        ukrycie()    
    })

    stackmat.on('reset', packet => {
        console.log('Timer stopped at: ' + packet.timeAsString)
        stopTimer()
        a=packet.timeAsString
        if (a.startsWith("0:")) {
            a = a.substring(2); // Usuwamy "0:" z początku
        }
        document.getElementById("timer").innerText=a
        pokaz()
        saveToLocalStorage();
        updateTabCzas()
        buforUsuwania=1
    })

    let sigma=1
    stackmat.on('packetReceived', packet => {
        if(packet.timeAsString==`0:00.000`)
        {
            resetTimer()
            if(sigma==1)
            {
                nextScramble()
                sigma=sigma+1
            }
        }
    })
    
    stackmat.start()

function ukrycie()
{
    document.getElementById("previousScrambel").style="display: none;"
    document.getElementById("nextScrambel").style="display: none;"
    document.getElementById("scramble-output").style="display: none;"
    document.getElementById("timer").style="margin-top: 126px"

}
function pokaz()
{
    document.getElementById("previousScrambel").style="display: block;"
    document.getElementById("nextScrambel").style="display: block;"
    document.getElementById("scramble-output").style="display: block;"
    document.getElementById("timer").style="margin-top: auto"
}





