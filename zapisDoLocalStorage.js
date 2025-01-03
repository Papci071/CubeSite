let timesWithScrambles = []; // Zmienna powinna być let, nie const
let idCzasu = localStorage.getItem("idCzasu") ? parseInt(localStorage.getItem("idCzasu")) : 0; // Odczytujemy idCzasu z localStorage, jeśli istnieje

function saveToLocalStorage() {
    // Pobierz czas i scramble z DOM
    let czas = document.getElementById("timer").textContent;
    if (czas === "00.000") return;  // Jeśli czas to 00.000, nie zapisuj
    let scramble = document.getElementById("scramble-output").textContent;
    if (scramble === "SCRAMBEL") return;  // Jeśli scramble to "SCRAMBEL", nie zapisuj

    // Sprawdź, czy taki wpis już istnieje w tablicy
    let newEntry = {
        idCzasu: idCzasu + 1,
        scramble: scramble,
        czas: czas
    };
    const existingEntry = timesWithScrambles.find(entry => entry.scramble === newEntry.scramble && entry.czas === newEntry.czas);

    if (!existingEntry) {
        // Jeśli taki wpis nie istnieje, dodajemy go do tablicy
        timesWithScrambles.push(newEntry);
        idCzasu++;  // Zwiększ idCzasu, by nie było powtórzeń
    }

    // Zapisz całą tablicę do localStorage
    localStorage.setItem("timesWithScrambles", JSON.stringify(timesWithScrambles));
    localStorage.setItem("idCzasu", idCzasu);  // Zapisz idCzasu

    // Debugowanie - sprawdźmy, czy zapis jest udany
    console.log("Zapisano do localStorage:");
    console.log("timesWithScrambles:", JSON.parse(localStorage.getItem("timesWithScrambles")));
    console.log("idCzasu:", localStorage.getItem("idCzasu"));
}





// Funkcja, która odczytuje dane z localStorage
window.addEventListener("DOMContentLoaded", () => {
    // Sprawdź, czy w localStorage są zapisane dane
    const savedTimes = localStorage.getItem("timesWithScrambles");
    if (savedTimes) {
        // Odtwórz zapisane dane
        timesWithScrambles = JSON.parse(savedTimes);
        console.log("Dane załadowane z localStorage:", timesWithScrambles);

        // Przebuduj tabelę na podstawie zapisanych danych
        timesWithScrambles.forEach(entry => {
            addRowToTable(entry.idCzasu, entry.czas, entry.scramble);
        });
    } else {
        console.log("Brak zapisanych danych w localStorage.");
    }

    // Odtwórz idCzasu z localStorage
    const savedIdCzasu = localStorage.getItem("idCzasu");
    if (savedIdCzasu) {
        idCzasu = parseInt(savedIdCzasu);
        console.log("Odtworzony idCzasu:", idCzasu);
    }
});



/*

window.addEventListener("DOMContentLoaded", sprawdz)
function sprawdz()
{
    let b = document.getElementById("timer").textContent;
    if (b === "00.000") return;  // Jeśli czas to 00.000, nie zapisuj
    wczytanie()
}


*/





function wczytanie()
{
    // Sprawdź, czy w localStorage są zapisane dane
    const savedTimes = localStorage.getItem("timesWithScrambles");
    if (savedTimes) {
        // Odtwórz zapisane dane
        timesWithScrambles = JSON.parse(savedTimes);
        console.log("Dane załadowane z localStorage:", timesWithScrambles);

        // Przebuduj tabelę na podstawie zapisanych danych
        timesWithScrambles.forEach(entry => {
            addRowToTable(entry.idCzasu, entry.czas, entry.scramble);
        });
    } else {
        console.log("Brak zapisanych danych w localStorage.");
    }

    // Odtwórz idCzasu z localStorage
    const savedIdCzasu = localStorage.getItem("idCzasu");
    if (savedIdCzasu) {
        idCzasu = parseInt(savedIdCzasu);
        console.log("Odtworzony idCzasu:", idCzasu);
    }
}