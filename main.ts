/**
 */
basic.forever(function () {
    while (input.pinIsPressed(TouchPin.P0)) {
        basic.showIcon(IconNames.Heart)
    }
    basic.showIcon(IconNames.Sad)
})
