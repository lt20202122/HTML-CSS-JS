// innitiating vars
var max = 100, asked_num, trys=0, asked_num, correct = false
const num = Math.floor(Math.random() * max)+1

// 2. 3.
asked_num = prompt ("Which number am I thinking of?", "Give a number between 0 and "+max);
// 4.
do {
    if (asked_num > max) {
    alert ("You cant pick a number above "+max+"!")
}
if (asked_num <= 0) {
    alert ("The number has to be at least 1!")
}
else if (asked_num == num) {
    correct = true
    trys+=1
    alert ("Exactly!")
    if (trys == 1) {
        alert ("It has taken you 1 try!")
    }
    else {
        alert ("It has taken you "+trys+" trys")
}
}
else if (asked_num < num) {
    alert ("Too little!")
    trys += 1
    asked_num = prompt ("Try another number")
}
else if (asked_num > num) {
    alert ("Too big!")
    trys+=1
    asked_num = prompt ("Try another number")
}
else {
    alert ("Error! Make sure to insert a number!")
}
if (trys == 10) {
    alert ("You took to many trys! 10 is the maximum!")
}
}
while ((correct == false) && (trys < 10));
