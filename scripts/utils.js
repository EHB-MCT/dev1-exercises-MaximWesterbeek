"use strict";

import context from "./context.js";

/**
 * Draw the line between 2 points
 * @param {Number} x1  X coordinate starting point
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

