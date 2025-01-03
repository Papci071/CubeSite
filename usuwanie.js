let buforUsuwania=1
function usunCzas()
{
    if(buforUsuwania>1)return;
    buforUsuwania++

    timesWithScrambles.pop()

    const table = document.getElementById("tabCzas");
    table.deleteRow(1);

    const lastRow = table.rows[table.rows.length - 1];
    lastRow.style.display=""
    


    removeRowFromLocalStorage("ostatniIdLoL")

}



function removeRowFromLocalStorage(idToRemove) {
    // Odczytaj tablicę z localStorage
    let timesWithScrambles = JSON.parse(localStorage.getItem("timesWithScrambles")) || [];

    if (idToRemove === "ostatniIdLoL" && timesWithScrambles.length > 0) {
        idToRemove = timesWithScrambles[timesWithScrambles.length - 1].idCzasu;
    }

    // Znajdź indeks wiersza do usunięcia
    const indexToRemove = timesWithScrambles.findIndex(entry => entry.idCzasu === idToRemove);

    if (indexToRemove !== -1) {
        // Usuń wiersz z tablicy
        timesWithScrambles.splice(indexToRemove, 1);

        // Zapisz zaktualizowaną tablicę do localStorage
        localStorage.setItem("timesWithScrambles", JSON.stringify(timesWithScrambles));
        console.log(`Wiersz o idCzasu=${idToRemove} został usunięty.`);
    } else {
        console.log(`Wiersz o idCzasu=${idToRemove} nie został znaleziony.`);
    }
}



function usuwaniePoId(a)
{
    console.log("JAPIDII"+a)
    removeRowFromLocalStorage(a)
    //updateTabCzas()

    const rows = document.getElementsByClassName(`wiersz${a}`);
    if (rows.length > 0) {
        rows[0].remove(); // Usuwa pierwszy wiersz
    }

}


