import translateString from "./translation.js";

describe("Testing  translateString()", () => {
    it("Should return an empty string if no arguments are passed", () => {
        expect(translateString()).toBe("");
    });

    it("Should be defined", () => {
        expect(() => translateString("abc")).toBeDefined();
    });

    it("Should return a string", () => {
        expect(typeof translateString("a")).toBe("string");
    });

    it("Should return the correct result", () => {
        expect(translateString("hello world")).toBe(
            ".... . .-.. .-.. --- / .-- --- .-. .-.. -..",
        );

        expect(
            translateString(".... . .-.. .-.. --- / .-- --- .-. .-.. -.."),
        ).toBe("hello world");
    });
});
