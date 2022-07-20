import convertCharacter from "./converted-char";
import * as errors from "./error-variables.js";

const {
    notEnoughParamsError,
    incorrectParamTypesError,
    arrsNotSameLengthError,
} = errors;

describe("Testing  convertCharacter()", () => {
    it("Should contain exactly three arguments", () => {
        expect(() => {
            convertCharacter([123], {});
        }).toThrow(notEnoughParamsError);

        expect(() => {
            convertCharacter("hello");
        }).toThrow(notEnoughParamsError);

        expect(() => {
            convertCharacter();
        }).toThrow(notEnoughParamsError);
    });

    it("Should have arguments of the correct type", () => {
        expect(() => {
            convertCharacter(123, "str", ["abc"]);
        }).toThrow(incorrectParamTypesError);
    });

    it("Should have two arrays of the same length", () => {
        expect(() => {
            convertCharacter("string", ["a", "b", "c"], ["a"]).toThrow(
                arrsNotSameLengthError,
            );
        });
    });

    it("Should be defined", () => {
        expect(() =>
            convertCharacter("abc", ["A", "B", "C"], morseArr),
        ).toBeDefined();
    });

    it("Should return a string", () => {
        expect(typeof convertCharacter("a", ["A"], [".-"])).toBe("string");
    });

    it("Should return the correct result", () => {
        expect(convertCharacter("a", ["A"], [".-"])).toBe(".-");

        expect(convertCharacter(".-", ["A"], [".-"])).toBe("a");
    });
});
