import convertCharacter from "./converted-char";

const morseArr = [".-", "-...", "-.-.", "-..", ".", "..-."];
const englishArr = ["a", "b", "c", "d", "e", "f"];

describe("Testing  convertCharacter()", () => {
    const notEnoughParamsError = new Error(
        "This function needs three arguments",
    );

    it("Should contain exactly three arguments", () => {
        expect(convertCharacter([123], ["and"])).toThrow(notEnoughParamsError);

        expect(convertCharacter("hello")).toThrow(notEnoughParamsError);

        expect(convertCharacter()).toThrow(notEnoughParamsError);
    });

    it("Should be defined", () => {
        expect(convertCharacter("abc", englishArr, morseArr)).toBeDefined();
    });

    it("Should return a string", () => {
        expect(typeof convertCharacter("abc", englishArr, morseArr)).toBe(
            "string",
        );
    });

    it("Should have arguments of the correct type", () => {
        const incorrectParamTypesError = new Error(
            "This function needs one string and two arrays",
        );

        expect(convertCharacter(123, "str", ["abc"])).toThrow(
            incorrectParamTypesError,
        );
    });

    it("Should return the correct result", () => {
        expect(convertCharacter("abc", englishArr, morseArr)).toBe(
            ".- -... -.-.",
        );

        expect(convertCharacter(".- -... -.-.", englishArr, morseArr)).toBe(
            "abc",
        );
    });
});
