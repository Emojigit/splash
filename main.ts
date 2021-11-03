/**
 * Micro:Bit LED Test
 */
//% color=#5C2D91 weight=101 icon="*"
namespace splash {
    /**
     * tunnel style 3-step splash screen
     */
    //% blockId=splash_tunnel block="Tunnel Splash Screen"
    export function tunnel() {
        basic.clearScreen()
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
        `)
        basic.pause(100)
        basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
        basic.pause(100)
        basic.showLeds(`
           . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
        `)
        basic.pause(20)
        basic.clearScreen()
    }
    /**
     * Lit LEDS one-by-one
     */
    //% blockId=splash_lit block="One-by-one lit Splash Screen"
    export function lit() {
        basic.clearScreen()
        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 5; x++) {
                led.plot(x, y)
                basic.pause(50)
            }
        }
        basic.pause(50)
        basic.clearScreen()
    }
    /**
     * Fade in LEDs
     */
    //% blockId=splash_fadein block="Fade in Splash Screen"
    export function lit_fadein() {
        basic.clearScreen()
        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 5; x++) {
                led.plot(x, y)
            }
        }
        for (let b = 1; b < 256; b++) {
        led.setBrightness(b)
        basic.pause(1)
        }
        basic.pause(50)
        basic.clearScreen()
    }
    /**
     * Fade out LEDs
     */
    //% blockId=splash_fadeout block="Fade out Splash Screen"
    export function lit_fadeout() {
        basic.clearScreen()
        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 5; x++) {
                led.plot(x, y)
            }
        }
        for (let b = 255; b > 0; b--) {
            led.setBrightness(b)
            basic.pause(1)
        }
        basic.pause(50)
        basic.clearScreen()
    }
    /**
     * Lit LEDS from top
     */
    //% blockId=splash_from_top block="Lit from top Splash Screen"
    export function from_top() {
        basic.clearScreen()
        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 5; x++) {
                led.plot(x, y)
            }
            basic.pause(100)
        }
        basic.pause(50)
        basic.clearScreen()
    }
    /**
     * Lit LEDS from bottom
     */
    //% blockId=splash_from_bottom block="Lit from bottom Splash Screen"
    export function from_bottom() {
        basic.clearScreen()
        for (let y = 0; y < 5; y++) {
            for (let x = 5; x > -1; x--) {
                led.plot(x, y)
            }
            basic.pause(100)
        }
        basic.pause(50)
        basic.clearScreen()
    }
    /**
     * Lit LEDS from left
     */
    //% blockId=splash_from_left block="Lit from left Splash Screen"
    export function from_left() {
        basic.clearScreen()
        for (let x = 0; x < 5; x++) {
            for (let y = 0; y < 5; y++) {
                led.plot(x, y)
            }
            basic.pause(100)
        }
        basic.pause(50)
        basic.clearScreen()
    }
    /**
     * Lit LEDS from right
     */
    //% blockId=splash_from_right block="Lit from right Splash Screen"
    export function from_right() {
        basic.clearScreen()
        for (let x = 5; x > -1; x--) {
            for (let y = 0; y < 5; y++) {
                led.plot(x, y)
            }
            basic.pause(100)
        }
        basic.pause(50)
        basic.clearScreen()
    }
}


