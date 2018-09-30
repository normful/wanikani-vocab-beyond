import { extractLines, parseLines } from "../../src/wwwjdic/parsing";

describe("extractLines", () => {
  it("extracts the <pre> text when there are results", () => {
    const res = `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<HTML>
<HEAD><META http-equiv="Content-Type" content="text/html; charset=UTF-8"><TITLE>WWWJDIC: Word Display</TITLE>
</HEAD><BODY>
<br>&nbsp;<br>
<pre>
一次遷移 [いちじせんい] /(n) primary succession/
核異性体転移 [かくいせたいてんい] /(n) isomeric transition/
周波数偏移 [しゅうはすうへんい] /(n) frequency shift/
時間転移 [じかんてんい] /(n) (See 時間の歪み) time warp/
</pre>
</BODY>
</HTML>
`;
    expect(extractLines(res)).toEqual([
      "一次遷移 [いちじせんい] /(n) primary succession/",
      "核異性体転移 [かくいせたいてんい] /(n) isomeric transition/",
      "周波数偏移 [しゅうはすうへんい] /(n) frequency shift/",
      "時間転移 [じかんてんい] /(n) (See 時間の歪み) time warp/"
    ]);
  });

  // it("returns an empty Array when there are no results", () => {});
});

describe("parseLines", () => {
  const test = (inputLine, expectedObj) => {
    it("parses " + inputLine, () => {
      expect(parseLines([inputLine])).toEqual([expectedObj]);
    });
  };

  test("上と下 [うえとした] /(exp) above and below/", {
    jp: "上と下（うえとした）",
    pos: "Expression",
    cm: false,
    en: ["above and below"],
    q: "上と下"
  });

  test(
    "下(P);許 [もと] /(adv) (sometimes written 元) under (esp. influence or guidance)/(P)/",
    {
      jp: "下(common)、許（もと）",
      pos: "Adverb",
      cm: true,
      en: ["(sometimes written 元) under (especially influence or guidance)"],
      q: "下"
    }
  );

  test(
    "下 [した] /(n) (1) below/down/under/younger (e.g. daughter)/(2) bottom/(3) beneath/underneath/(4) (as 下から, 下より, etc.) just after/right after/(n,adj-no) (5) inferiority/one's inferior (i.e. one's junior)/(n) (6) (See 下取り) trade-in/(n-pref) (7) (See 下準備) preliminary/preparatory/(P)/",
    {
      jp: "下（した）",
      pos: "Noun",
      cm: true,
      en: [
        "1. below; down; under; younger (e.g. daughter)",
        "2. bottom",
        "3. beneath; underneath",
        "4. (as 下から, 下より, etc.) just after; right after; (noun, no-adjective)",
        "5. inferiority; one's inferior (i.e. one's junior); (noun)",
        "6. (See 下取り) trade-in; (prefix noun)",
        "7. (See 下準備) preliminary; preparatory"
      ],
      q: "下"
    }
  );

  test(
    "縁の下 [えんのした] /(adj-no,n) (id) out of sight/in the background/unnoticed/under the veranda/",
    {
      jp: "縁の下（えんのした）",
      pos: "No-adjective, Noun",
      cm: false,
      en: [
        "[idiomatic expression] out of sight; in the background; unnoticed; under the veranda"
      ],
      q: "縁の下"
    }
  );

  test(
    "下 [か] /(suf,adj-no) under (being in said condition or environment)/",
    {
      jp: "下（か）",
      pos: "Suffix, No-adjective",
      cm: false,
      en: ["under (being in said condition or environment)"],
      q: "下"
    }
  );

  // test(
  //   '以下(P);已下 [いか(P);いげ] /(n) (1) not exceeding/and downward/... and below/(2) below (e.g. standard)/under (e.g. a level)/(3) the below-mentioned/the following/the rest/(P)/'
  // );
  // test('腋窩;腋下 [えきか;えきわ(腋窩)] /(n,adj-no) {anat} armpit/axilla/');
  // test('言下 [げんか;ごんか] /(n) promptly/');
  // test('靴下(P);くつ下;沓下 [くつした] /(n) socks/sock/stockings/stocking/(P)/');
  // test('却下 [きゃっか] /(n,vs) rejection/dismissal/(P)/');
  // test(
  //   '一下 [いっか] /(n) (See 命令一下・めいれいいっか) something handed down (usu. an order)/'
  // );
});
