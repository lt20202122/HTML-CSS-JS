// vars
var cpuMove, pMove
let score=[0,0]

const moves = {
    Rock: {
        Rock:"Tie",
        Scissors:"Win",
        Paper:"Lose",
        },
    Scissors: {
        Rock:"Lose",
        Scissors:"Tie",
        Paper:"Win",
        },
    Paper:{
        Rock:"Win",
        Scissors:"Lose",
        Paper:"Tie",
    },
    }

// 1.
cpuMove = Math.floor(Math.random() * 3) + 1;

if (cpuMove == 1) {
    cpuMove = "Rock";
} else if (cpuMove == 2) {
    cpuMove = "Paper";
} else if (cpuMove == 3) {
    cpuMove = "Scissors";
}

console.log("Computer chose "+cpuMove+".")

// 1 = Rock, 2 = Scissors, 3 = Paper

//2.
pMove=prompt("Rock, Scissors, Paper?", "Pick one of it")
let solution = moves[pMove][cpuMove]
alert ("The computer picked "+cpuMove+".")
alert ("This is a "+solution+".")
console.log(solution)
