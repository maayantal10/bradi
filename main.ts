basic.showIcon(IconNames.Angry)
SuperBit.MotorRunDual(
SuperBit.enMotors.M1,
255,
SuperBit.enMotors.M3,
255
)
basic.pause(3000)
SuperBit.MotorRunDual(
SuperBit.enMotors.M1,
-255,
SuperBit.enMotors.M3,
255
)
basic.pause(3000)
