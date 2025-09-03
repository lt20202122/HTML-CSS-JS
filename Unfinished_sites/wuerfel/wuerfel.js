// Rechenart würfeln
function wuerfeln() {
    document.getElementById("wuerfelnB").disabled = true;
    // operator würfeln
    let operator = Math.floor(Math.random() * 4);
    let operatorSymbol;
    if (operator === 0) {
        operatorSymbol = "+";
    } else if (operator === 1) {
        operatorSymbol = "-";
    } else if (operator === 2) {
        operatorSymbol = "x";
    } else {
        operatorSymbol = ":";
    }
    console.log (operatorSymbol);

    // zahl1 und zahl2 würfeln
    let zahl1 = Math.floor(Math.random() * 99) + 1;
    let zahl2 = Math.floor(Math.random() * 99) + 1;
    if (operatorSymbol === "x") {
        zahl1 = Math.floor(Math.random() * 10) + 1;
        zahl2 = Math.floor(Math.random() * 10) + 1;
    }
    console.log (zahl1, zahl2);
    document.getElementById("aufgabe").innerHTML = "Aufgabe: "+zahl1 + " " + operatorSymbol + " " + zahl2 + " = ?";
    rechnen(zahl1, zahl2, operatorSymbol);
    phase2();
}
function rechnen(zahl1, zahl2, operatorSymbol) {
    let loesung;
    if (operatorSymbol === "+") {
        loesung = zahl1 + zahl2;
    } else if (operatorSymbol === "-") {
        loesung = zahl1 - zahl2;
    } else if (operatorSymbol === "x") {
        loesung = zahl1 * zahl2;
    } else {
        loesung = zahl1 / zahl2;
    }
    console.log (loesung);
    document.getElementById("ergebnis").innerHTML = "Lösung: " + loesung;
}
function phase2() {
    let w = document.getElementById("phase2");
    w.style.display = "block"
}
function phase3() {
    console.log("phase3");
    let p = document.getElementById("ergebnis");
    p.style.display = "block"
    let a = document.getElementById("new");
    a.style.display = "block"
    let b = document.getElementById("new");
    console.log(b);
    b.style.display = "block"
}
function neu() {
    let p = document.getElementById("ergebnis");
    p.style.display = "none"
    let w = document.getElementById("phase2");
    w.style.display = "none"
    document.getElementById("eingabe").value = "";

    wuerfeln();

}