radio.onReceivedNumber(function (receivedNumber) {
    basic.clearScreen()
    basic.pause(500)
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            `)
        music.playTone(262, music.beat(BeatFraction.Quarter))
    } else if (receivedNumber == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    msg = 0
    radio.sendNumber(msg)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    msg = 1
    radio.sendNumber(msg)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    msg = 3
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        `)
    basic.clearScreen()
    radio.sendNumber(msg)
})
let msg = 0
radio.setGroup(49)
radio.setTransmitPower(7)
basic.showLeds(`
    . . # . .
    . # . . .
    # . # # #
    . # . . .
    . . # . .
    `)
basic.pause(1000)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    `)
music.playTone(262, music.beat(BeatFraction.Quarter))
basic.pause(2000)
basic.showLeds(`
    . . # . .
    . . . # .
    # # # . #
    . . . # .
    . . # . .
    `)
basic.pause(1000)
basic.showLeds(`
    . . . . .
    . . . . .
    . # # # .
    . . . . .
    . . . . .
    `)
music.playTone(262, music.beat(BeatFraction.Whole))
basic.pause(2000)
basic.showLeds(`
    . . # . .
    . # . # .
    # . # . #
    . . # . .
    . . # . .
    `)
basic.pause(1000)
basic.clearScreen()
basic.showLeds(`
    . . . . #
    . . . # .
    . . # . .
    . # . . .
    # . . . .
    `)
basic.pause(2000)
basic.clearScreen()
