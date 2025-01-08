function  kostka()
{
    let W1 = "white"
    let W2 = "white"
    let W3 = "white"
    let W4 = "white"
    let W5 = "white"
    let W6 = "white"
    let W7 = "white"
    let W8 = "white"
    let W9 = "white"
    let O1 = "orange"
    let O2 = "orange"
    let O3 = "orange"
    let O4 = "orange"
    let O5 = "orange"
    let O6 = "orange"
    let O7 = "orange"
    let O8 = "orange"
    let O9 = "orange"
    let G1 = "green"
    let G2 = "green"
    let G3 = "green"
    let G4 = "green"
    let G5 = "green"
    let G6 = "green"
    let G7 = "green"
    let G8 = "green"
    let G9 = "green"
    let R1 = "red"
    let R2 = "red"
    let R3 = "red"
    let R4 = "red"
    let R5 = "red"
    let R6 = "red"
    let R7 = "red"
    let R8 = "red"
    let R9 = "red"
    let B1 = "blue"
    let B2 = "blue"
    let B3 = "blue"
    let B4 = "blue"
    let B5 = "blue"
    let B6 = "blue"
    let B7 = "blue"
    let B8 = "blue"
    let B9 = "blue"
    let Y1 = "yellow"
    let Y2 = "yellow"
    let Y3 = "yellow"
    let Y4 = "yellow"
    let Y5 = "yellow"
    let Y6 = "yellow"
    let Y7 = "yellow"
    let Y8 = "yellow"
    let Y9 = "yellow"

    WizulacjaScrambla()

    function odswierzKolory()
    {
        document.getElementById("W1").style.backgroundColor=`${W1}`
        document.getElementById("W2").style.backgroundColor=`${W2}`
        document.getElementById("W3").style.backgroundColor=`${W3}`
        document.getElementById("W4").style.backgroundColor=`${W4}`
        document.getElementById("W5").style.backgroundColor=`${W5}`
        document.getElementById("W6").style.backgroundColor=`${W6}`
        document.getElementById("W7").style.backgroundColor=`${W7}`
        document.getElementById("W8").style.backgroundColor=`${W8}`
        document.getElementById("W9").style.backgroundColor=`${W9}`

        document.getElementById("O1").style.backgroundColor=`${O1}`
        document.getElementById("O2").style.backgroundColor=`${O2}`
        document.getElementById("O3").style.backgroundColor=`${O3}`
        document.getElementById("O4").style.backgroundColor=`${O4}`
        document.getElementById("O5").style.backgroundColor=`${O5}`
        document.getElementById("O6").style.backgroundColor=`${O6}`
        document.getElementById("O7").style.backgroundColor=`${O7}`
        document.getElementById("O8").style.backgroundColor=`${O8}`
        document.getElementById("O9").style.backgroundColor=`${O9}`

        document.getElementById("G1").style.backgroundColor=`${G1}`
        document.getElementById("G2").style.backgroundColor=`${G2}`
        document.getElementById("G3").style.backgroundColor=`${G3}`
        document.getElementById("G4").style.backgroundColor=`${G4}`
        document.getElementById("G5").style.backgroundColor=`${G5}`
        document.getElementById("G6").style.backgroundColor=`${G6}`
        document.getElementById("G7").style.backgroundColor=`${G7}`
        document.getElementById("G8").style.backgroundColor=`${G8}`
        document.getElementById("G9").style.backgroundColor=`${G9}`

        document.getElementById("R1").style.backgroundColor=`${R1}`
        document.getElementById("R2").style.backgroundColor=`${R2}`
        document.getElementById("R3").style.backgroundColor=`${R3}`
        document.getElementById("R4").style.backgroundColor=`${R4}`
        document.getElementById("R5").style.backgroundColor=`${R5}`
        document.getElementById("R6").style.backgroundColor=`${R6}`
        document.getElementById("R7").style.backgroundColor=`${R7}`
        document.getElementById("R8").style.backgroundColor=`${R8}`
        document.getElementById("R9").style.backgroundColor=`${R9}`

        document.getElementById("B1").style.backgroundColor=`${B1}`
        document.getElementById("B2").style.backgroundColor=`${B2}`
        document.getElementById("B3").style.backgroundColor=`${B3}`
        document.getElementById("B4").style.backgroundColor=`${B4}`
        document.getElementById("B5").style.backgroundColor=`${B5}`
        document.getElementById("B6").style.backgroundColor=`${B6}`
        document.getElementById("B7").style.backgroundColor=`${B7}`
        document.getElementById("B8").style.backgroundColor=`${B8}`
        document.getElementById("B9").style.backgroundColor=`${B9}`

        document.getElementById("Y1").style.backgroundColor=`${Y1}`
        document.getElementById("Y2").style.backgroundColor=`${Y2}`
        document.getElementById("Y3").style.backgroundColor=`${Y3}`
        document.getElementById("Y4").style.backgroundColor=`${Y4}`
        document.getElementById("Y5").style.backgroundColor=`${Y5}`
        document.getElementById("Y6").style.backgroundColor=`${Y6}`
        document.getElementById("Y7").style.backgroundColor=`${Y7}`
        document.getElementById("Y8").style.backgroundColor=`${Y8}`
        document.getElementById("Y9").style.backgroundColor=`${Y9}`
    }

    function U()
    {
        let zapisW1 = W1
        let zapisW2 = W2
        let zapisW3 = W3
        let zapisW4 = W4
        let zapisW6 = W6
        let zapisW7 = W7
        let zapisW8 = W8
        let zapisW9 = W9

        W1 = zapisW7
        W3 = zapisW1
        W9 = zapisW3
        W7 = zapisW9
        W2 = zapisW4
        W6 = zapisW2
        W8 = zapisW6
        W4 = zapisW8

        let zapisO1 = O1
        let zapisO2 = O2
        let zapisO3 = O3

        let zapisG1 = G1
        let zapisG2 = G2
        let zapisG3 = G3

        let zapisR1 = R1
        let zapisR2 = R2
        let zapisR3 = R3

        let zapisB1 = B1
        let zapisB2 = B2
        let zapisB3 = B3

        O1 = zapisG1
        O2 = zapisG2
        O3 = zapisG3

        G1 = zapisR1
        G2 = zapisR2
        G3 = zapisR3

        R1 = zapisB1
        R2 = zapisB2
        R3 = zapisB3

        B1 = zapisO1
        B2 = zapisO2
        B3 = zapisO3

        odswierzKolory()
    }

    function Dprim()
    {
        let zapisY1 = Y1
        let zapisY2 = Y2
        let zapisY3 = Y3
        let zapisY4 = Y4
        let zapisY6 = Y6
        let zapisY7 = Y7
        let zapisY8 = Y8
        let zapisY9 = Y9

        Y1 = zapisY3
        Y3 = zapisY9
        Y9 = zapisY7
        Y7 = zapisY1
        Y2 = zapisY6
        Y6 = zapisY8
        Y8 = zapisY4
        Y4 = zapisY2

        let zapisO7 = O7
        let zapisO8 = O8
        let zapisO9 = O9

        let zapisG7 = G7
        let zapisG8 = G8
        let zapisG9 = G9

        let zapisR7 = R7
        let zapisR8 = R8
        let zapisR9 = R9

        let zapisB7 = B7
        let zapisB8 = B8
        let zapisB9 = B9

        O7 = zapisG7
        O8 = zapisG8
        O9 = zapisG9

        G7 = zapisR7
        G8 = zapisR8
        G9 = zapisR9

        R7 = zapisB7
        R8 = zapisB8
        R9 = zapisB9

        B7 = zapisO7
        B8 = zapisO8
        B9 = zapisO9

        odswierzKolory()
    }

    function F()
    {
        let zapisG1 = G1
        let zapisG2 = G2
        let zapisG3 = G3
        let zapisG4 = G4
        let zapisG6 = G6
        let zapisG7 = G7
        let zapisG8 = G8
        let zapisG9 = G9

        G1 = zapisG7
        G3 = zapisG1
        G9 = zapisG3
        G7 = zapisG9
        G2 = zapisG4
        G6 = zapisG2
        G8 = zapisG6
        G4 = zapisG8

        let zapisO3 = O3
        let zapisO6 = O6
        let zapisO9 = O9

        let zapisY1 = Y1
        let zapisY2 = Y2
        let zapisY3 = Y3

        let zapisR7 = R7
        let zapisR4 = R4
        let zapisR1 = R1

        let zapisW9 = W9
        let zapisW8 = W8
        let zapisW7 = W7

        O3 = zapisY1
        O6 = zapisY2
        O9 = zapisY3

        Y1 = zapisR7
        Y2 = zapisR4
        Y3 = zapisR1

        R7 = zapisW9
        R4 = zapisW8
        R1 = zapisW7

        W9 = zapisO3
        W8 = zapisO6
        W7 = zapisO9

        odswierzKolory()
    }

    function Bprim()
    {
        let zapisB1 = B1
        let zapisB2 = B2
        let zapisB3 = B3
        let zapisB4 = B4
        let zapisB6 = B6
        let zapisB7 = B7
        let zapisB8 = B8
        let zapisB9 = B9

        B1 = zapisB3
        B3 = zapisB9
        B9 = zapisB7
        B7 = zapisB1
        B2 = zapisB6
        B6 = zapisB8
        B8 = zapisB4
        B4 = zapisB2

        let zapisR3 = R3
        let zapisR6 = R6
        let zapisR9 = R9

        let zapisW1 = W1
        let zapisW2 = W2
        let zapisW3 = W3

        let zapisO7 = O7
        let zapisO4 = O4
        let zapisO1 = O1

        let zapisY9 = Y9
        let zapisY8 = Y8
        let zapisY7 = Y7

        R3 = zapisW1
        R6 = zapisW2
        R9 = zapisW3

        W1 = zapisO7
        W2 = zapisO4
        W3 = zapisO1

        O7 = zapisY9
        O4 = zapisY8
        O1 = zapisY7

        Y9 = zapisR3
        Y8 = zapisR6
        Y7 = zapisR9

        odswierzKolory()
    }

    function R()
    {
        let zapisR1 = R1
        let zapisR2 = R2
        let zapisR3 = R3
        let zapisR4 = R4
        let zapisR6 = R6
        let zapisR7 = R7
        let zapisR8 = R8
        let zapisR9 = R9

        R1 = zapisR7
        R3 = zapisR1
        R9 = zapisR3
        R7 = zapisR9
        R2 = zapisR4
        R6 = zapisR2
        R8 = zapisR6
        R4 = zapisR8

        let zapisG3 = G3
        let zapisG6 = G6
        let zapisG9 = G9

        let zapisY3 = Y3
        let zapisY6 = Y6
        let zapisY9 = Y9

        let zapisB7 = B7
        let zapisB4 = B4
        let zapisB1 = B1

        let zapisW3 = W3
        let zapisW6 = W6
        let zapisW9 = W9

        G3 = zapisY3
        G6 = zapisY6
        G9 = zapisY9

        Y3 = zapisB7
        Y6 = zapisB4
        Y9 = zapisB1

        B7 = zapisW3
        B4 = zapisW6
        B1 = zapisW9

        W3 = zapisG3
        W6 = zapisG6
        W9 = zapisG9

        odswierzKolory()
    }

    function Lprim()
    {
        let zapisO1 = O1
        let zapisO2 = O2
        let zapisO3 = O3
        let zapisO4 = O4
        let zapisO6 = O6
        let zapisO7 = O7
        let zapisO8 = O8
        let zapisO9 = O9

        O1 = zapisO3
        O3 = zapisO9
        O9 = zapisO7
        O7 = zapisO1
        O2 = zapisO6
        O6 = zapisO8
        O8 = zapisO4
        O4 = zapisO2

        let zapisB3 = B3
        let zapisB6 = B6
        let zapisB9 = B9

        let zapisW1 = W1
        let zapisW4 = W4
        let zapisW7 = W7

        let zapisG7 = G7
        let zapisG4 = G4
        let zapisG1 = G1

        let zapisY1 = Y1
        let zapisY4 = Y4
        let zapisY7 = Y7

        B3 = zapisW7
        B6 = zapisW4
        B9 = zapisW1

        W1 = zapisG1
        W4 = zapisG4
        W7 = zapisG7

        G7 = zapisY7
        G4 = zapisY4
        G1 = zapisY1

        Y1 = zapisB9
        Y4 = zapisB6
        Y7 = zapisB3

        odswierzKolory()
    }
    function D()
    {
        let i=0
        while(i<3)
        {
            Dprim()
            i++
        }
    }
    function B()
    {
        let i=0
        while(i<3)
        {
            Bprim()
            i++
        }
    }
    function L()
    {
        let i=0
        while(i<3)
        {
            Lprim()
            i++
        }
    }
    function Uprim()
    {
        let i=0
        while(i<3)
        {
            U()
            i++
        }
    }
    function Fprim()
    {
        let i=0
        while(i<3)
        {
            F()
            i++
        }
    }
    function Rprim()
    {
        let i=0
        while(i<3)
        {
            R()
            i++
        }
    }
    function UU()
    {
        let i=0
        while(i<2)
        {
            U()
            i++
        }
    }
    function DD()
    {
        let i=0
        while(i<2)
        {
            D()
            i++
        }
    }
    function RR()
    {
        let i=0
        while(i<2)
        {
            R()
            i++
        }
    }
    function LL()
    {
        let i=0
        while(i<2)
        {
            L()
            i++
        }
    }
    function FF()
    {
        let i=0
        while(i<2)
        {
            F()
            i++
        }
    }
    function BB()
    {
        let i=0
        while(i<2)
        {
            B()
            i++
        }
    }

    function WizulacjaScrambla() {
        let scrambel = document.getElementById("scramble-output").textContent;
        if (scrambel === "SCRAMBEL") return;

        let czesci = scrambel.split(" ");

        for (let i = 0; i < czesci.length; i++) {
            let ruchType = czesci[i];
            ruch(ruchType);

        }
    }



    function ruch(a) {
        switch (a) {
            case "U":
                U();
                break;
            case "U'":
                Uprim();
                break;
            case "U2":
                UU();
                break;

            case "D":
                D();
                break;
            case "D'":
                Dprim();
                break;
            case "D2":
                DD();
                break;

            case "R":
                R();
                break;
            case "R'":
                Rprim();
                break;
            case "R2":
                RR();
                break;

            case "L":
                L();
                break;
            case "L'":
                Lprim();
                break;
            case "L2":
                LL();
                break;

            case "F":
                F();
                break;
            case "F'":
                Fprim();
                break;
            case "F2":
                FF();
                break;

            case "B":
                B();
                break;
            case "B'":
                Bprim();
                break;
            case "B2":
                BB();
                break;

            default:
                console.log(`Sorry, we are out of ${a}.`);
        }
    }

}