import { randomScrambleForEvent } from "https://cdn.cubing.net/v0/js/cubing/scramble";

const recentScrambles = [];
let currentScrambleIndex = -1;

async function nextScramble() {
    if (currentScrambleIndex === recentScrambles.length - 1) {
        try {
            const scramble = await randomScrambleForEvent("333");
            const currentScramble = scramble.toString();
            recentScrambles.push(currentScramble);
            currentScrambleIndex = recentScrambles.length - 1;
            document.getElementById("scramble-output").textContent = currentScramble;
        } catch (error) {
            console.error("Failed to fetch scramble:", error);
            document.getElementById("scramble-output").textContent = "Error loading scramble.";
        }
    } else {
        currentScrambleIndex++;
        const scramble = recentScrambles[currentScrambleIndex];
        document.getElementById("scramble-output").textContent = scramble;
    }
}

function previousScramble() {
    if (currentScrambleIndex > 0) {
        currentScrambleIndex--;
        const scramble = recentScrambles[currentScrambleIndex];
        document.getElementById("scramble-output").textContent = scramble;
    } else {
        console.log("No previous scrambles available.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const previousDiv = document.getElementById("previousScrambel");
    const nextDiv = document.getElementById("nextScrambel");
    
    console.log(previousDiv, nextDiv);  // Powinny zwrócić referencje do elementów, nie null

    if (previousDiv && nextDiv) {
        previousDiv.addEventListener("click", previousScramble);
        nextDiv.addEventListener("click", nextScramble);
    } else {
        console.error("Divs with IDs 'previousScrambel' and 'nextScrambel' not found in DOM.");
    }
});

window.nextScramble = nextScramble;

