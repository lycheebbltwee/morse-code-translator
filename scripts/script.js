import { translateString } from "./translation.js";
import { changeText } from "./dom-display.js";

// DOM Variables
const textInput = document.getElementById("inputDisp");
const textOutput = document.querySelector(".translation-text");

// Function for when input is empty
const emptyDisp = () => {
    changeText(textOutput, "");
};

// Event Listeners
textInput.addEventListener("input", () => {
    if (textInput.value == null || textInput == undefined) {
        return emptyDisp();
    } else {
        const translationText = translateString(textInput.value);
        changeText(textOutput, translationText);
    }
});
