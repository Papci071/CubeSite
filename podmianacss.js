function zamianka() {
    let mainStyle = document.getElementById("mainStyle");

    // Sprawdź, czy element 'mainStyle' istnieje
    if (!mainStyle) {
        console.error('Element "mainStyle" nie został znaleziony!');
        return;
    }

    // Jeśli obecny arkusz to 'kostka2.css', zamień na 'kostka.css'
    if (mainStyle.href.includes('kostka2.css')) {
        mainStyle.href = 'kostka.css';
    } 
    // Jeśli obecny arkusz to 'kostka.css', zamień na 'kostka2.css'
    else if (mainStyle.href.includes('kostka.css')) {
        mainStyle.href = 'kostka2.css';
    }
}









window.addEventListener('resize', checkElementWidth);
let bufor = "kostka";

function checkElementWidth() {
    var element = document.getElementById('navigacja');
    var mainStyle = document.getElementById('mainStyle');

    if (!element) {
        console.log("Element 'navigacja' nie istnieje");
        return;
    }

    //console.log("Element width:", element.offsetWidth);
    //console.log("Bufor:", bufor);

    if (element.offsetWidth < 1269) {
        if (bufor == "kostka") {
            console.log("Zmiana na kostka2.css");
            mainStyle.href = 'kostka2.css';
            bufor = "kostka2";
        }
    } else {
        if (bufor == "kostka2") {
            console.log("Zmiana na kostka.css");
            mainStyle.href = 'kostka.css';
            bufor = "kostka";
        }
    }
}

