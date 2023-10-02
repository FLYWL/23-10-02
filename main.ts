input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.Heart)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("C")
})
input.onButtonPressed(Button.AB, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
})
basic.showLeds(`
    # # # # #
    . . # . .
    # # # # #
    . . # . .
    # # # # #
    `)
music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.InBackground)
