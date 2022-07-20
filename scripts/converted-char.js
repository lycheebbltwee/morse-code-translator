import * as errors from "./error-variables.js";

const {
    notEnoughParamsError,
    incorrectParamTypesError,
    arrsNotSameLengthError,
} = errors;

const convertCharacter = (string, arr1, arr2) => {
    // If an argument is not defined
    if (!string || !arr1 || !arr2) {
        throw notEnoughParamsError;
    }

    // If an argument is not the right type
    if (
        typeof string !== "string" &&
        typeof arr1 !== "object" &&
        arr2 !== "object"
    ) {
        throw incorrectParamTypesError;
    }

    // If the length of the character arrays are not the same
    if (arr1.length !== arr2.length) {
        throw arrsNotSameLengthError;
    }

    /* 
    
    Start of function

    */
    const regEx = /^[-\.]+/.test(string);

    const strArr = regEx ? string.split(" ") : string.split("");

    // console.log(strArr);

    const translatedArr = regEx
        ? strArr.map((char) => {
              return arr1[arr2.indexOf(char)].toLowerCase();
          })
        : strArr.map((char) => {
              return arr2[arr1.indexOf(char.toUpperCase())];
          });

    // console.log(translatedArr);

    return regEx ? translatedArr.join("") : translatedArr.join(" ");
};

export default convertCharacter;
