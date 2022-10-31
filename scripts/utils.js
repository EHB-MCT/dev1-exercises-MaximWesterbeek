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
 * Draw a circle
 * @param {Number} x X coordinate centre
 * @param {Number} y Y coordinate centre
 * @param {Number} radius Radius circle
 */
export function strokeCircle(x, y, radius) {
    context.beginPath();
    context.ellipse(x, y, radius, radius, 0, 0, Math.PI*2);
    context.stroke();
}


            //FILLED SHAPES
/**
 * Draw a filled circle with outline
 * @param {Number} x X coordinate centre
 * @param {Number} y Y coordinate centre
 * @param {Number} radius Radius circle
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
 * @param {Number} radius Radius circle
 */
 export function fillCircle(x, y, radius) {
    context.beginPath();
    context.ellipse(x, y, radius, radius, 0, 0, Math.PI*2);
    context.fill();
}


/**
 * Draw a filled ellipse with outline
 * @param {Number} x X coordinate centre
 * @param {Number} y Y coordinate centre
 * @param {Number} rX X coordinate width
 * @param {Number} rY Y coordinate height
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
 * @param {Number} rX X coordinate width
 * @param {Number} rY Y coordinate height
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

export function hsl(h, s, l) {
    return "hsl("+ h +","+ s +"%,"+ l +"%)";
}

export function hsla(h, s, l, a) {
    return "hsl("+ h +","+ s +"%,"+ l +"%,"+ a +")";
}