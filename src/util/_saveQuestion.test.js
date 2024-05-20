const { _saveQuestion } = require("./_DATA");
//---------- _saveQuestion -----------//
describe("_saveQuestion", () => {
    it("should resolve with the formatted question when valid data is passed", async () => {
      const validQuestion = {
        optionOneText: "Option One",
        optionTwoText: "Option Two",
        author: "tylermcginnis",
      };
  
      // Invoke _saveQuestion with valid data
      const response = await _saveQuestion(validQuestion);
  
      // Ensure the response is truthy
      expect(response).toBeTruthy();
    });
  
    it("should reject with an error message if optionOneText is missing", async () => {
      const invalidQuestion = {
        optionTwoText: "Option Two",
        author: "tylermcginnis",
      };
  
      await expect(_saveQuestion(invalidQuestion)).rejects.toEqual(
        "Please provide optionOneText, optionTwoText, and author"
      );
    });
  });