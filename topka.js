function topka() {
    const savedTimes = localStorage.getItem("timesWithScrambles");
    if (savedTimes) {
        let timesWithScrambles = JSON.parse(savedTimes);
        let top1 = Infinity;
        let top2 = Infinity;
        let top3 = Infinity;

        timesWithScrambles.forEach(entry => {
            let czas = Number(entry.czas);

            if (czas < top1) {
                top3 = top2;
                top2 = top1;
                top1 = czas;
            } else if (czas < top2) {
                top3 = top2;
                top2 = czas;
            } else if (czas < top3) {
                top3 = czas;
            }
        });

        console.log(`top1: ${top1} top2: ${top2} top3: ${top3}`);
        document.getElementById("top1").setAttribute('data-text', `${top1}`);
        document.getElementById("top2").setAttribute('data-text', `${top2}`);
        document.getElementById("top3").setAttribute('data-text', `${top3}`);
    } else {
        console.log("Brak zapisanych danych w localStorage.");
    }
}
