const convertCharacter = (string, arr1, arr2) => {
    // If an argument is not defined
    if (!string || !arr1 || !arr2) {
        throw new Error("This function needs three arguments");
    }

    // If an argument is not the right type
    if (
        typeof string !== "string" &&
        typeof arr1 !== "object" &&
        arr2 !== "object"
    ) {
        throw new Error("This function needs one string and two arrays");
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
