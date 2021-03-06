import convertCharacter from "./converted-char.js";
import * as errors from "./error-variables.js";

const { incorrectParamTypesError } = errors;

// A to Z in Morse Code
const alphabet = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "!": "-.-.--",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    _: "..--.-",
    '"': ".-..-.",
    $: "...-..-",
    "@": ".--.-.",
    " ": "/",
};

/* A function to translate a string into English or Morse Code
@param { string } string - Accepts a string
@returns { string } translatedString - Returns the translated string
 */

const translateString = (string) => {
    // Place Object keys into an array
    const keys = Object.getOwnPropertyNames(alphabet);
    // Place Object values into an array
    const values = Object.values(alphabet);

    // Error catching:
    // If the string is empty or contains a number
    if (!string) {
        return "";
    }

    // If a non-string is inputted
    if (typeof string !== "string") {
        return incorrectParamTypesError;
    }

    return convertCharacter(string, keys, values);
};

export default translateString;
