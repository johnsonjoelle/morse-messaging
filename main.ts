input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    if (translate == false) {
        translate = true
        basic.showString("translate on")
    } else {
        translate = false
        basic.showString("translate off")
    }
})
input.onButtonPressed(Button.A, function () {
    letter = "0"
    radio.sendString("" + (letter))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        `)
})
function findLetter (text: string) {
    if (text == letterA) {
        basic.showString("a")
    } else if (text == letterB) {
        basic.showString("b")
    } else if (text == letterC) {
        basic.showString("c")
    } else if (text == letterD) {
        basic.showString("d")
    } else if (text == letterE) {
        basic.showString("e")
    } else if (text == letterF) {
        basic.showString("f")
    } else if (text == letterG) {
        basic.showString("g")
    } else if (text == letterH) {
        basic.showString("h")
    } else if (text == letterI) {
        basic.showString("i")
    } else if (text == letterJ) {
        basic.showString("j")
    } else if (text == letterK) {
        basic.showString("k")
    } else if (text == letterL) {
        basic.showString("l")
    } else if (text == letterM) {
        basic.showString("m")
    } else if (text == letterN) {
        basic.showString("n")
    } else if (text == letterO) {
        basic.showString("o")
    } else if (text == letterP) {
        basic.showString("p")
    } else if (text == letterQ) {
        basic.showString("q")
    } else if (text == letterR) {
        basic.showString("r")
    } else if (text == letterS) {
        basic.showString("s")
    } else if (text == letterT) {
        basic.showString("t")
    } else if (text == letterU) {
        basic.showString("u")
    } else if (text == letterV) {
        basic.showString("v")
    } else if (text == letterW) {
        basic.showString("w")
    } else if (text == letterX) {
        basic.showString("x")
    } else if (text == letterY) {
        basic.showString("y")
    } else if (text == letterZ) {
        basic.showString("z")
    } else if (text == num0) {
        basic.showString("0")
    } else if (text == num1) {
        basic.showString("1")
    } else if (text == num2) {
        basic.showString("2")
    } else if (text == num3) {
        basic.showString("3")
    } else if (text == num4) {
        basic.showString("4")
    } else if (text == num5) {
        basic.showString("5")
    } else if (text == num6) {
        basic.showString("6")
    } else if (text == num7) {
        basic.showString("7")
    } else if (text == num8) {
        basic.showString("8")
    } else if (text == num9) {
        basic.showString("9")
    } else {
        basic.showString("?")
    }
}
radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.pause(500)
    if (receivedString == "0") {
        letterHolder = "" + letterHolder + receivedString
        if (translate == false) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                `)
        }
        music.playTone(262, music.beat(BeatFraction.Quarter))
    } else if (receivedString == "1") {
        if (translate == false) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . # # # .
                . . . . .
                . . . . .
                `)
        } else {
            letterHolder = "" + letterHolder + receivedString
        }
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        if (translate == false) {
            basic.showLeds(`
                . . . . #
                . . . # .
                . . # . .
                . # . . .
                # . . . .
                `)
        } else {
            findLetter(letterHolder)
            letterHolder = ""
        }
    }
})
input.onButtonPressed(Button.B, function () {
    letter = "1"
    radio.sendString("" + (letter))
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    letter = "3"
    radio.sendString("" + (letter))
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        `)
    basic.clearScreen()
})
let letter = ""
let num0 = ""
let num9 = ""
let num8 = ""
let num7 = ""
let num6 = ""
let num5 = ""
let num4 = ""
let num3 = ""
let num2 = ""
let num1 = ""
let letterZ = ""
let letterY = ""
let letterX = ""
let letterW = ""
let letterV = ""
let letterU = ""
let letterT = ""
let letterS = ""
let letterR = ""
let letterQ = ""
let letterP = ""
let letterO = ""
let letterN = ""
let letterM = ""
let letterL = ""
let letterK = ""
let letterJ = ""
let letterI = ""
let letterH = ""
let letterG = ""
let letterF = ""
let letterE = ""
let letterD = ""
let letterC = ""
let letterB = ""
let letterA = ""
let letterHolder = ""
let translate = false
radio.setGroup(49)
radio.setTransmitPower(7)
translate = false
letterHolder = ""
letterA = "01"
letterB = "1000"
letterC = "1010"
letterD = "100"
letterE = "0"
letterF = "0010"
letterG = "110"
letterH = "0000"
letterI = "00"
letterJ = "0111"
letterK = "101"
letterL = "0100"
letterM = "11"
letterN = "10"
letterO = "111"
letterP = "0110"
letterQ = "1101"
letterR = "010"
letterS = "000"
letterT = "1"
letterU = "001"
letterV = "0001"
letterW = "011"
letterX = "1001"
letterY = "1011"
letterZ = "1100"
num1 = "01111"
num2 = "00111"
num3 = "00011"
num4 = "00001"
num5 = "00000"
num6 = "10000"
num7 = "11000"
num8 = "11100"
num9 = "11110"
num0 = "11111"
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
