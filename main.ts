input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    Gavin += 1
    basic.showString("Gavin:",50)
basic.showNumber(Gavin,50)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Andrew += 1
    basic.showString("Andrew:",50)
basic.showNumber(Andrew,50)
})
input.onGesture(Gesture.Shake, function () {
    hand = randint(0, 2)
    if (hand == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (hand == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (hand == 2) {
        basic.showIcon(IconNames.Scissors)
    }
})
let hand = 0
let Gavin = 0
let Andrew = 0
Gavin = 0
Andrew = 0
basic.forever(function () {
    if (Gavin >= 5) {
        basic.showString("Gavin is the winner!!")
    } else if (Andrew >= 5) {
        basic.showString("Andrew is the winner!!")
    }
})
