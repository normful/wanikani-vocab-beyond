import { wordPronunciations } from "../../src/forvo/api";

const fakeWkofSettings = {
  forvo_api_key: "foo",
  forvo_min_rating: 0,
  forvo_username_whitelist_csv: "a,b,c",
  show_all_wwwjdic_vocab: true,
  show_vocab_beyond_at_top: true,
  max_wwwjdic_vocab_shown: 10,
  show_forvo_usernames: true,
  hide_uncommon_indicator: true
};

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
      wordPronunciations(erroringXhrFunc, "界", fakeWkofSettings)
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
      wordPronunciations(successfulXhrFunc, "界", fakeWkofSettings)
    ).resolves.toEqual(res);
  });
});
