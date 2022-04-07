radio.onReceivedNumber(function (receivedNumber) {
    let receivedMsg: number[] = []
    basic.clearScreen()
    basic.pause(500)
    receivedMsg.push(receivedNumber)
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # .
            . . # # .
            . . . . .
            `)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (receivedNumber == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
        music.playTone(262, music.beat(BeatFraction.Double))
    } else {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    msg = 0
    radio.sendNumber(msg)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # .
        . . # # .
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
    basic.clearScreen()
    radio.sendNumber(msg)
})
let msg = 0
let dot = "."
let dash = "-"
radio.setGroup(49)
radio.setTransmitPower(7)
basic.showLeds(`
    . . # . .
    . # . . .
    # . # # #
    . # . . .
    . . # . .
    `)
basic.pause(2000)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # # .
    . . # # .
    . . . . .
    `)
basic.pause(2000)
basic.showLeds(`
    . . # . .
    . . . # .
    # # # . #
    . . . # .
    . . # . .
    `)
basic.pause(2000)
basic.showLeds(`
    . . . . .
    . . . . .
    . # # # .
    . . . . .
    . . . . .
    `)
basic.pause(2000)
basic.showLeds(`
    . . # . .
    . # . # .
    # . # . #
    . . # . .
    . . # . .
    `)
basic.pause(2000)
basic.showString("stop")
basic.clearScreen()
basic.forever(function () {
	
})
