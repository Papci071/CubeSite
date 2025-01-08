function addRowToTable(lp, czas, scramble) {
    const table = document.getElementById("tabCzas");

    // Sprawdź, czy w tabeli jest już 15 wierszy (pomijając pierwszy wiersz z nagłówkami)
    if (table.rows.length >= 17) {
        // Usuń ostatni wiersz (najstarszy)
        table.deleteRow(table.rows.length - 1);
    }

    // Utwórz nowy wiersz na początku tabeli (indeks 1, bo 0 to wiersz nagłówka)
    const newRow = table.insertRow(1);
    newRow.classList.add(`wiersz${lp}`)
    // Utwórz komórki i dodaj dane
    const cellLp = newRow.insertCell(0);
    const cellCzas = newRow.insertCell(1);
    const cellScramble = newRow.insertCell(2);

    cellLp.textContent = lp; // Numer porządkowy
    cellLp.onclick = function() { usuwaniePoId(lp); };
    cellCzas.textContent = czas; // Czas
    cellScramble.textContent = scramble; // Scramble

    // Opcjonalnie: dodaj styl lub klasy
    cellScramble.style.whiteSpace = "nowrap";
    cellScramble.style.overflow = "hidden";
    cellScramble.style.textOverflow = "ellipsis";

    // Jeśli chcesz, możesz dodać klasy CSS do wiersza lub komórek
    //newRow.classList.add("custom-row");



    if (table.rows.length > 16) {
        const lastRow = table.rows[table.rows.length - 1];
        lastRow.style.display = "none"; // Ukryj ostatni wiersz
    }


}





function updateTabCzas()
{
    let czas=document.getElementById("timer").textContent 
    if(czas=="00.000") return;
    let scramble=document.getElementById("scramble-output").textContent 
    if(scramble=="SCRAMBEL") return;   
    addRowToTable(`${idCzasu}`,`${czas}`,`${scramble}`)
}