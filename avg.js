function avgAll()
{
    avgEnt()
    avg5()
    avg10()
    topka()
    kostka()
}

function avgEnt()
{
        const savedTimes = localStorage.getItem("timesWithScrambles");
    if (savedTimes) {
        // Odtwórz zapisane dane
        timesWithScrambles = JSON.parse(savedTimes);
        let f=0
        let k=0
        timesWithScrambles.forEach(entry => {
            k=k+1
            f = f + Number(entry.czas);
        });
        let avgAll=f/k
        avgAll = parseFloat(avgAll.toFixed(3))
        console.log(`liczba czasów:${k} łączny czas:${f} średni czas:${avgAll}`)
        document.getElementById("avgOGOLczas").innerText=`${avgAll}`
    } else {
        console.log("Brak zapisanych danych w localStorage.");
    }
}

function avg5() {
    const savedTimes = localStorage.getItem("timesWithScrambles");
    if (savedTimes) {
        // Odtwórz zapisane dane
        let timesWithScrambles = JSON.parse(savedTimes);

        // Sprawdź, czy jest co najmniej 5 wpisów
        if (timesWithScrambles.length >= 5) {
            // Weź ostatnie 5 wpisów
            const lastFiveEntries = timesWithScrambles.slice(-5);

            // Oblicz sumę czasów z ostatnich 5 wpisów
            let total = lastFiveEntries.reduce((sum, entry) => sum + Number(entry.czas), 0);

            // Oblicz średnią
            let avgAll = total / 5;
            avgAll = parseFloat(avgAll.toFixed(3));

            console.log(`Łączny czas ostatnich 5: ${total}, średni czas z ostatnich 5: ${avgAll}`);
            document.getElementById("avg5czas").innerText = `${avgAll}`;
        } else {
            console.log("Za mało zapisanych danych, aby obliczyć średnią z 5.");
            document.getElementById("avg5czas").innerText = `---`;
        }
    } else {
        console.log("Brak zapisanych danych w localStorage.");
    }
}

function avg10() {
    const savedTimes = localStorage.getItem("timesWithScrambles");
    if (savedTimes) {
        let timesWithScrambles = JSON.parse(savedTimes);
        if (timesWithScrambles.length >= 10) {
            const lastFiveEntries = timesWithScrambles.slice(-10);
            let total = lastFiveEntries.reduce((sum, entry) => sum + Number(entry.czas), 0);
            let avgAll = total / 10;
            avgAll = parseFloat(avgAll.toFixed(3));
            console.log(`Łączny czas ostatnich 10: ${total}, średni czas z ostatnich 10: ${avgAll}`);
            document.getElementById("avg10czas").innerText = `${avgAll}`;
        } else {
            console.log("Za mało zapisanych danych, aby obliczyć średnią z 10.");
            document.getElementById("avg10czas").innerText = `---`;
        }
    } else {
        console.log("Brak zapisanych danych w localStorage.");
    }
}



















