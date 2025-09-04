// Rechenart würfeln
function dice() {
    document.getElementById("diceB").disabled = true;
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
    if ((operatorSymbol === "x") || (operatorSymbol==":")) {
        zahl1 = Math.floor(Math.random() * 10) + 1;
        zahl2 = Math.floor(Math.random() * 10) + 1;
    }
    
    if (operatorSymbol=="-") {
        do {
            zahl1=Math.floor(Math.random()*99)+1
            zahl2=Math.floor(Math.random()*99)+1
            console.log("Changed -")
        }
        while (zahl1<zahl2)
    }
    if (operatorSymbol==":") {
        do {
            zahl1=Math.floor(Math.random()*99)+1
            zahl2=Math.floor(Math.random()*99)+1
            console.log("Changed /")
        }
        while(zahl1%zahl2!=0)
    }
    console.log (zahl1, zahl2);
    document.getElementById("task").innerHTML = "Task: "+zahl1 + " " + operatorSymbol + " " + zahl2 + " = ?";
    calculate(zahl1, zahl2, operatorSymbol);
    phase2();
}
function calculate(zahl1, zahl2, operatorSymbol) {
    if (operatorSymbol === "+") {
        window.solution = zahl1 + zahl2;
    } else if (operatorSymbol === "-") {
        window.solution = zahl1 - zahl2;
    } else if (operatorSymbol === "x") {
        window.solution = zahl1 * zahl2;
    } else {
        window.solution = zahl1 / zahl2;
    }
    console.log(window.solution);
}
function phase2() {
    let w = document.getElementById("phase2");
    w.style.display = "block"
}
function phase3() {
    console.log("phase3");
    document.getElementById("input").disabled=true
    let p = document.getElementById("check");
    p.style.display = "block"
    let a = document.getElementById("new");
    a.style.display = "block"
    let b = document.getElementById("new");
    console.log(b);
    b.style.display = "block"
    check_answer()
}
function newT() {
    let p = document.getElementById("check");
    p.style.display = "none"
    let w = document.getElementById("phase2");
    w.style.display = "none"
    document.getElementById("input").value = "";
    document.getElementById("input").disabled=false

    dice();
}
function answer_true() {
    let b = document.getElementById("check")
    b.style.display = "block"
    b.innerHTML = "Correct!"
    let a = Number(localStorage.getItem("points"))
    a+=10
    localStorage.setItem("points", a)
    console.log(a)
    document.getElementById("points").innerHTML="You now have "+a+" points!"
}
function answer_false(){
    console.log("False answer started")
    let b = document.getElementById("check")
    b.style.display = "block"
    b.innerHTML = "Thats wrong! The right answer would have been "+solution+"."
    let a = Number(localStorage.getItem("points"))
    a-=10
    localStorage.setItem("points", a)
    console.log(a)
    document.getElementById("points").innerHTML="You now have "+a+" points!"
}

function check_answer() {
    let answer = document.getElementById("input").value
    console.log("answer = "+answer+" solution = "+solution+".")
    if (answer == solution) {
        answer_true()
    }
    else {
        answer_false()
    }
}