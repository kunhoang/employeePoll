const { _saveQuestionAnswer } = require("./_DATA");

//---------- _saveQuestionAnswer -----------//
describe("_saveQuestionAnswer", () => {
  it("Correct", async () => {
    const response = await _saveQuestionAnswer({
      authedUser: "tylermcginnis",
      qid: "vthrdm985a262al8qx3do",
      answer: "optionOne",
    });

    expect(response).toBeTruthy();
  });

  it("UnCorrect", async () => {
    const response = await _saveQuestionAnswer({
      authedUser: "tylermcginnis",
      qid: undefined,
      answer: "optionOne",
    }).catch((e) => e);

    expect(response).toBe("Please provide authedUser, qid, and answer");
  });
});


