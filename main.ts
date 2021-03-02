input.onButtonPressed(Button.A, function () {
    Score_A += 1
})
input.onButtonPressed(Button.AB, function () {
    if (Score_A == Score_B) {
        basic.showString("=")
    }
    if (Score_A < Score_B) {
        basic.showString("B")
    }
    if (Score_A > Score_B) {
        basic.showString("A")
    }
})
input.onButtonPressed(Button.B, function () {
    Score_B += 1
})
let Score_B = 0
let Score_A = 0
Score_A = 0
Score_B = 0
