"use strict";

import context from "./context.js";



            //LINES
/**
 * Draw the line between 2 points
 * @param {Number} x1 X coordinate starting point
 * @param {Number} y1 Y coordinate starting point
 * @param {Number} x2 X coordinate end point
 * @param {Number} y2 Y coordinate end point
 */
export function drawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

/**
 * Draw a stroked circle
 * @param {Number} x X coordinate centre
 * @param {Number} y Y coordinate centre
 * @param {Number} radius radius circle
 */
export function strokeCircle(x, y, radius) {
    context.beginPath();
    context.ellipse(x, y, radius, radius, 0, 0, Math.PI*2);
    context.stroke();
}

/**
 * Draw a stroked ellipse
 * @param {*} x X coordinate centre
 * @param {*} y Y coordinate centre
 * @param {*} rX horizontal radius
 * @param {*} rY vertical radius
 */
 export function strokeEllipse(x, y, rX, rY) {
    context.beginPath();
    context.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2);
    context.stroke();
}



            //FILLED SHAPES

            /**
 * Draw a stroked and filled circle
 * @param {Number} x X coordinate centre
 * @param {Number} y Y coordinate centre
 * @param {Number} radius radius circle
 */
 export function fillAndStrokeCircle(x, y, radius) {
    context.beginPath();
    context.ellipse(x, y, radius, radius, 0, 0, Math.PI*2);
    context.fill();
    context.stroke();
}

/**
 * Draw a filled circle
 * @param {Number} x X coordinate centre
 * @param {Number} y Y coordinate centre
 * @param {Number} radius radius circle
 */
 export function fillCircle(x, y, radius) {
    context.beginPath();
    context.ellipse(x, y, radius, radius, 0, 0, Math.PI*2);
    context.fill();
}


/**
 * Draw a stoked and filled ellipse
 * @param {Number} x X coordinate centre
 * @param {Number} y Y coordinate centre
 * @param {Number} rX horizontal radius
 * @param {Number} rY vertical radius
 */
export function fillAndStrokeEllipse(x, y, rX, rY) {
    context.beginPath();
    context.ellipse(x, y, rX, rY, 0, 0, Math.PI*2);
    context.fill();
    context.stroke();
}

/**
 * Draw a filled ellipse
 * @param {Number} x X coordinate centre
 * @param {Number} y Y coordinate centre
 * @param {Number} rX X horizontal radius
 * @param {Number} rY Y vertical radius
 */
 export function fillEllipse(x, y, rX, rY) {
    context.beginPath();
    context.ellipse(x, y, rX, rY, 0, 0, Math.PI*2);
    context.fill();
    context.stroke();
}



            //COLOURS
export function rgb(r, g, b) {
    let rgb = "rgb(" + r + "," + g + "," + b +")";
    return rgb;
}

export function rgba(r, g, b, a) {
    let rgb = "rgb(" + r + "," + g + "," + b +","+ a +" %)";
    return rgb;
}

export function hsl(h, s, l) {
    return "hsl("+ h +","+ s +"%,"+ l +"%)";
}

export function hsla(h, s, l, a) {
    return "hsl("+ h +","+ s +"%,"+ l +"%,"+ a +")";
}



            //MATH STUFF

/** function that converts an angle in degrees to radians
 * @param {number} degrees 
 */
 export function degrees(degrees) {
    return degrees * (Math.PI / 180);
}

/**
 * function that calculates the distance between 2 coordinates
 * @param {number} x1 x coordinate of the first point
 * @param {number} y1 y coordinate of the first point
 * @param {number} x2 x coordinate of the second point
 * @param {number} y2 y coordinate of the second point
 */
 export function calculateDistance(x1, y1, x2, y2) {
    return Math.hypot(x2 - x1, y2 - y1);
}

/**
 * function that returns a random whole number between a minimum and a maximumm value
 * @param {number} min minimum value
 * @param {number} max maximum value
 */
 export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * function that returns a structured random decimal number based on a Gaussian curve
 * Adapted from stackoverflow answer by Dorian: https://stackoverflow.com/a/39187274
 */
 export function randomGaussian() {
    var rand = 0;

    for (var i = 0; i < 6; i += 1) {
        rand += Math.random() * 2 - 1;
    }

    return rand / 6;
}