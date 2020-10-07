// Created by: Ahmed
// Created date :Oct 7, 2020.
// 
// This program use Potentiometer.
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    basic.pause(1000)
})
