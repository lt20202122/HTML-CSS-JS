function codeBreaker() {
// Vars
let num1 = Math.floor(Math.random() * 9+1);
let num2 = Math.floor(Math.random() * 9+1);
let num3 = Math.floor(Math.random() * 9+1);

console.log("Script loaded.");
// loop
let cracked = false;
let round=0;
do {
    round++;
    console.log("Round " + round);
    let myTry = prompt("Make a guess! If you want to cancel, type END", "Number between 111 and 999.");
    let end=false
    if ((myTry=="END")||(myTry==null)){
        end=true
        break;
    }
    let tipp1 = parseInt(myTry.charAt(0));
    let tipp2 = parseInt(myTry.charAt(1));
    let tipp3 = parseInt(myTry.charAt(2));

    var rightPlace = 0;
    var wrongPlace = 0;

    if (tipp1 == num1) {
        rightPlace++;
    } else if (tipp1 == num2 || tipp1 == num3) {
        wrongPlace++;
    }

    if (tipp2 == num2) {
        rightPlace++;
    } else if (tipp2 == num1 || tipp2 == num3) {
        wrongPlace++;
    }

    if (tipp3 == num3) {
        rightPlace++;
    } else if (tipp3 == num1 || tipp3 == num2) {
        wrongPlace++;
    }
    if (rightPlace === 3){
        cracked=true
    }

    alert("You have " + rightPlace + " numbers in the right place and " + wrongPlace + " correct numbers in the wrong place.");
} while ((cracked == false)&&(round<10));

if ((cracked==false)||(end==true)){
    alert("You did not crack the code! It was " + num1 + num2 + num3 + "!");
} else {
alert("You cracked the code! It was " + num1 + num2 + num3 + "!");
}
}
