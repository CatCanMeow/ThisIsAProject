let theBasicSmile: Image = null
for (let index = 0; index < 10; index++) {
    theBasicSmile = images.createImage(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
    theBasicSmile.showImage(0)
    basic.pause(200)
    basic.clearScreen()
    basic.pause(200)
}
basic.showString("THIS! IS! A! PRO-GRAM!")
let theBeepAndBoopArray = ["BEEP", "BOOP", "BAH"]
for (let theBeepOrBoopOrBah of theBeepAndBoopArray) {
    basic.showString("" + theBeepOrBoopOrBah + "! ")
}
basic.showString("VERY! BORING! HUH?")
for (let theYPosition = 0; theYPosition <= 4; theYPosition++) {
    for (let theXPosition = 0; theXPosition <= 4; theXPosition++) {
        led.plot(theXPosition, theYPosition)
        basic.pause(100)
    }
}
basic.clearScreen()
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
let theRandomNumber = randint(1, 10)
if (theRandomNumber < 6) {
    basic.showString("THE! RESULT! IS! RANDOM! NUMBER! <! 6!")
}
basic.showString("PLEASE! PRESS! BUTTON! A!")
if (input.buttonIsPressed(Button.A)) {
    basic.showString("OH! YOU! PRESSED! ME!")
}
basic.showIcon(IconNames.Heart)
basic.pause(1000)
basic.clearScreen()
basic.showString("BYE! BYE!")
