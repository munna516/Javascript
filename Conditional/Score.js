var score = 81
var friendScore = 67
if (score > 80) {
    if (friendScore > 80) {
        console.log("Go for Lunch")
    }
    else if (friendScore > 60 && friendScore <= 80) {
        console.log("Better Luck Next Time")
    }
    else if (friendScore >= 40 && friendScore <= 60) {
        console.log("keep your friend's message unseen")
    }
    else {
        console.log("Block your friend")
    }
}
else {
    console.log("Go to home and sleep and act sad")
}