"use strict";

/**
 * @type {CanvasRenderingContext2D}
 */
let context;

setUpCanvasContext();

export default context;

function setUpCanvasContext() {
    let canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext('2d');
}

