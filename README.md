# WaniKani Vocab Beyond

![WaniKani Vocab Beyond](./screenshots/kanji-page-wkvb-at-bottom.png)

## Description

This [WaniKani](https://www.wanikani.com) script lets you study much more vocabulary for each kanji than is included in WaniKani, by showing hiragana pronunciation, definitions, part of speech, and commonality indicators for vocabulary retrieved from Jim Breen's [WWWJDIC](http://nihongo.monash.edu/cgi-bin/wwwjdic) [API](http://www.edrdg.org/wwwjdic/wwwjdicinf.html#backdoor_tag). It also allows you to listen to any native speaker pronunciations from [Forvo](https://forvo.com/) for each vocabulary word (if you pay \$24/year for a Forvo API key), and allows you to filter audio by Forvo username (and thus filter by regional dialects).

The Vocab Beyond section is rendered on kanji lessons, kanji reviews, and kanji pages.

Vocab Beyond will still show WWWJDIC vocab, even if you don't configure it with a valid Forvo API key.

## Requirements

- [Tampermonkey](https://tampermonkey.net/)
- [Forvo API key](https://api.forvo.com) (optional)

## Installation

1. Install @rfindley 's WaniKani Open Framework according to [these instructions](https://github.com/rfindley/wanikani-open-framework#installation).
2. Install this script from Greasyfork at https://greasyfork.org/en/scripts/372737-wanikani-vocab-beyond
3. (Optional) Configure Vocab Beyond with your Forvo API key.
    1. Sign up for a Forvo account at https://forvo.com/signup/
    2. Purchase a Fovo API key at https://api.forvo.com/plans-and-pricing/
    3. Copy your Forvo API key from https://api.forvo.com/account/
    4. Open the Vocab Beyond settings from the menu at the top right of your [WaniKani dashboard](https://www.wanikani.com/dashboard): ![Settings accessed from dashboard](./screenshots/settings-accessed-from-dashboard.png)
    5. Paste your API key into the field under the Audio settings tab: ![Forvo API key field](./screenshots/forvo-api-key-field.png)

## Settings

This section explains any settings options that aren't entirely self-explanatory.

### Audio Settings

![Audio settings](./screenshots/settings-1-audio.png)

### Vocab Settings

Each non-profit tier Forvo API key is limited to 500 API requests per day. To avoid hitting your quota, you can limit the maximum number of WWWJDIC vocabulary words to query the Forvo API with, using vocab settings in this tab:

![Vocab settings](./screenshots/settings-2-vocab.png)

### Appearance Settings

![Appearance settings](./screenshots/settings-3-appearance.png)

#### Show Vocab Beyond first

By default, Vocab Beyond is rendered in:

- Kanji lessons: In the last "Examples" tab

  ![](./screenshots/lesson-page-wkvb-in-examples-tab.png)
- Kanji reviews: At the bottom of the expanded Item Info section

  ![](./screenshots/review-page-wkvb-at-bottom.png)
- Kanji pages: After the "Found in Vocabulary" section

  ![](./screenshots/kanji-page-wkvb-at-bottom.png)

By checking `Show Vocab Beyond first`, the Vocab Beyond section will be rendered first, so you can see it as soon as possible:

- Kanji lessons: In the first "Radicals" tab

  ![](./screenshots/lesson-page-wkvb-in-radicals-tab.png)
- Kanji reviews: At the top of the expanded Item Info section

  ![](./screenshots/review-page-wkvb-at-top.png)
- Kanji pages: At the top of the page

  ![](./screenshots/kanji-page-wkvb-at-top.png)

#### Hide uncommon icon

If you have enabled the "Show uncommon vocab" checkbox in the Vocab settings tab, you'll see orange circular icons beside uncommon vocabulary.

- With the uncommon vocab indicator icon visible

  ![](./screenshots/uncommon-vocab-indicator-shown.png)

- With the uncommon vocab indicator icon hidden

  ![](./screenshots/uncommon-vocab-indicator-hidden.png)

## Support

Post a comment at https://community.wanikani.com/t/userscript-wanikani-vocab-beyond/33046 or open a GitHub Issue at https://github.com/normful/wanikani-vocab-beyond

## Contributing

You can build the script locally by installing [yarn](https://yarnpkg.com/en/) and building with [webpack](https://webpack.js.org/):

```
git clone git@github.com:normful/wanikani-vocab-beyond.git
cd wanikani-vocab-beyond
brew install yarn
yarn
yarn build
```

Development commands:

- `yarn build` runs [webpack](https://webpack.js.org/) once
- `yarn watch` runs [webpack](https://webpack.js.org/) and watches for changes
- `yarn lint` runs [TSLint](https://palantir.github.io/tslint/) on all TypeScript files
- `yarn prettier` runs [Prettier](https://prettier.io/) on all TypeScript files
- `yarn test` runs [Jest](https://jestjs.io/) tests once
- `yarn testwatch` runs [Jest](https://jestjs.io/) tests and watches for changes

In development, you might also want to:

- change the [webpack mode](https://github.com/normful/wanikani-vocab-beyond/blob/master/webpack.config.js#L21) to `"development"`
- enable [WKVB logging](https://github.com/normful/wanikani-vocab-beyond/blob/master/src/logger/logger.ts#L11)
- enable [`gm-http` logging](https://github.com/normful/wanikani-vocab-beyond/blob/master/index.ts#L4-L5)

## Credits

Thanks @rfindley and @axetroy for the following projects that this script heavily relies on:

- https://github.com/rfindley/wanikani-open-framework
- https://github.com/axetroy/ts-gmscript-boilerplate
- https://github.com/axetroy/gm-http
