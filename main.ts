radio.onReceivedNumber(function (receivedNumber) {
    basic.clearScreen()
    basic.pause(500)
    if (receivedNumber == 0) {
        msgHolder.push(receivedNumber)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            `)
        music.playTone(262, music.beat(BeatFraction.Quarter))
    } else if (receivedNumber == 1) {
        msgHolder.push(receivedNumber)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            `)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.clearScreen()
        findLetter(msgHolder)
msgHolder = []
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
        . . . . .
        . # # # .
        . . . . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    msg = 3
    basic.clearScreen()
    radio.sendNumber(msg)
})
let msg = 0
let letterZ: number[] = []
let letterY: number[] = []
let letterX: number[] = []
let letterW: number[] = []
let letterV: number[] = []
let letterU: number[] = []
let letterT: number[] = []
let letterS: number[] = []
let letterR: number[] = []
let letterQ: number[] = []
let letterP: number[] = []
let letterO: number[] = []
let letterN: number[] = []
let letterM: number[] = []
let letterL: number[] = []
let letterK: number[] = []
let letterJ: number[] = []
let letterI: number[] = []
let letterH: number[] = []
let letterG: number[] = []
let letterF: number[] = []
let letterE: number[] = []
let letterD: number[] = []
let letterC: number[] = []
let letterB: number[] = []
let letterA: number[] = []
let msgHolder: number[] = []
function findLetter(letter: number[]) {
    if (letter == letterA) {
        basic.showString("a")
    } else if (letter == letterB) {
        basic.showString("b")
    } else if (letter == letterC) {
        basic.showString("c")
    } else if (letter == letterD) {
        basic.showString("d")
    } else if (letter == letterE) {
        basic.showString("e")
    } else if (letter == letterF) {
        basic.showString("f")
    } else if (letter == letterG) {
        basic.showString("g")
    } else if (letter == letterH) {
        basic.showString("h")
    } else if (letter == letterI) {
        basic.showString("i")
    } else if (letter == letterJ) {
        basic.showString("j")
    } else if (letter == letterK) {
        basic.showString("k")
    } else if (letter == letterL) {
        basic.showString("l")
    } else if (letter == letterM) {
        basic.showString("m")
    } else if (letter == letterN) {
        basic.showString("n")
    } else if (letter == letterO) {
        basic.showString("o")
    } else if (letter == letterP) {
        basic.showString("p")
    } else if (letter == letterQ) {
        basic.showString("q")
    } else if (letter == letterR) {
        basic.showString("r")
    } else if (letter == letterS) {
        basic.showString("s")
    } else if (letter == letterT) {
        basic.showString("t")
    } else if (letter == letterU) {
        basic.showString("u")
    } else if (letter == letterV) {
        basic.showString("v")
    } else if (letter == letterW) {
        basic.showString("w")
    } else if (letter == letterX) {
        basic.showString("x")
    } else if (letter == letterY) {
        basic.showString("y")
    } else if (letter == letterZ) {
        basic.showString("z")
    } else {
        basic.showString("?")
    }
}
msgHolder = []
radio.setGroup(49)
radio.setTransmitPower(7)
letterA = [0, 1]
letterB = [
1,
0,
0,
0
]
letterC = [
1,
0,
1,
0
]
letterD = [1, 0, 0]
letterE = [0]
letterF = [
0,
0,
1,
0
]
letterG = [1, 1, 0]
letterH = [
0,
0,
0,
0
]
letterI = [0, 0]
letterJ = [
0,
1,
1,
1
]
letterK = [1, 0, 1]
letterL = [
0,
1,
0,
0
]
letterM = [1, 1]
letterN = [1, 0]
letterO = [1, 1, 1]
letterP = [
0,
1,
1,
0
]
letterQ = [
1,
1,
0,
1
]
letterR = [0, 1, 0]
letterS = [0, 0, 0]
letterT = [1]
letterU = [0, 0, 1]
letterV = [
0,
0,
0,
1
]
letterW = [0, 1, 1]
letterX = [
1,
0,
0,
1
]
letterY = [
1,
0,
1,
1
]
letterZ = [
1,
1,
0,
0
]
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
basic.pause(2000)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . # # # .
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
basic.pause(2000)
basic.clearScreen()
basic.showString("stop")
basic.clearScreen()
