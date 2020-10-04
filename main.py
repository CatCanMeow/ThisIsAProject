theBasicSmile: Image = None
for index in range(10):
    theBasicSmile = images.create_image("""
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        """)
    theBasicSmile.show_image(0)
    basic.pause(200)
    basic.clear_screen()
    basic.pause(200)
basic.show_string("THIS! IS! A! PRO-GRAM!")
theBeepAndBoopArray = ["BEEP", "BOOP", "BAH"]
for theBeepOrBoopOrBah in theBeepAndBoopArray:
    basic.show_string("" + theBeepOrBoopOrBah + "! ")