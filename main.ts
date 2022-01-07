radio.onReceivedNumber(function (receivedNumber) {
    basic.showIcon(IconNames.EigthNote)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    if (init == 1) {
        basic.showString("A")
    }
})
input.onButtonPressed(Button.AB, function () {
    if (init == 1) {
        basic.showString("" + (input.lightLevel()))
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
    if (init == 1) {
        basic.showString("B")
    }
    basic.pause(100)
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        basic.showNumber(2)
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        basic.showNumber(1)
    } else if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showNumber(0)
    } else {
        basic.showNumber(-1)
    }
})
input.onGesture(Gesture.Shake, function () {
    if (init == 1) {
        basic.showString("S")
    }
})
let init = 0
radio.setGroup(1)
music.playMelody("C D E F G A B C5 ", 120)
init = 0
for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= 5; j++) {
        led.plot(j, i)
    }
    basic.pause(500)
}
init += 1
