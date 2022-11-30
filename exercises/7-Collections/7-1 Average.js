"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;


let totalNumbers = 1000;
let numbers = [];
let average = 0;

fillArray();

function fillArray() {
    for (let i = 0; i < totalNumbers; i++) {

        numbers[i] = Utils.randomNumber(0, 100);

    }
    console.log(calculateAverage(numbers));

}

calculateAverage();

function calculateAverage(listOfNumbers) {
    let sum = 0;

    for (let i = 0; i < listOfNumbers.length; i++) {
        sum += listOfNumbers[i];
    }
    
    average = Math.floor(sum / listOfNumbers.length);

    return average;
}