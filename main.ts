// Bluetooth
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
// Button
input.onButtonPressed(Button.A, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Heart)
})
// Tilt
input.onGesture(Gesture.TiltLeft, function () {
    servos.P1.setAngle(0)
})
input.onSound(DetectedSound.Loud, function () {
    servos.P1.setAngle(150)
    servos.P2.setAngle(90)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    command = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (command == "open") {
        mover()
    } else if (command == "close") {
        reset()
    }
})
input.onButtonPressed(Button.B, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.InBackground)
    basic.showString("HAPPY BIRTHDAY")
})
input.onGesture(Gesture.TiltRight, function () {
    servos.P1.setAngle(180)
})
function mover () {
    servos.P1.setAngle(150)
    servos.P2.setAngle(90)
    reset()
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    reset()
})
function reset () {
    servos.P1.setAngle(0)
    servos.P2.setAngle(0)
}
let command = ""
// Bluetooth
bluetooth.startUartService()
