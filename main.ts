input.onGesture(Gesture.ScreenDown, function () {
	
})
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Hello!")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.EightG, function () {
	
})
if (input.buttonIsPressed(Button.AB)) {
    basic.showIcon(IconNames.Chessboard)
} else {
    basic.clearScreen()
}
basic.forever(function () {
    basic.showNumber(1)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showString("Hello!")
    basic.clearScreen()
    basic.pause(10000)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.Chessboard)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    basic.showIcon(IconNames.SmallDiamond)
})
