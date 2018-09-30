import { wordPronunciations } from "../../src/forvo/api";

describe("wordPronunciations", () => {
  it("rejects with a response Object when xhr errors", async () => {
    expect.assertions(1);
    const res = { status: 400, statusText: "uh-oh" };
    const erroringXhrFunc = opts => {
      setTimeout(() => {
        opts.onerror(res);
      }, 1);
    };
    await expect(
      wordPronunciations(erroringXhrFunc, "界", { forvo_api_key: "key" })
    ).rejects.toEqual(res);
  });

  it("resolves with a response Object when xhr succeeds", async () => {
    expect.assertions(1);
    const res = { status: 200, responseText: "great" };
    const successfulXhrFunc = opts => {
      setTimeout(() => {
        opts.onload(res);
      }, 1);
    };
    await expect(
      wordPronunciations(successfulXhrFunc, "界", { forvo_api_key: "key" })
    ).resolves.toEqual(res);
  });
});
