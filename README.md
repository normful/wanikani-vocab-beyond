# WaniKani Vocab Beyond

![WaniKani Vocab Beyond](./screenshots/kanji-page-wkvb-at-bottom.png)

## Description

This [WaniKani](https://www.wanikani.com) script lets you study way more vocabulary than is included in WaniKani, by using Jim Breen's [WWWJDIC](http://nihongo.monash.edu/cgi-bin/wwwjdic) [API](http://www.edrdg.org/wwwjdic/wwwjdicinf.html#backdoor_tag). It also allows you to listen to any native speaker pronunciations from [Forvo](https://forvo.com/) for each vocabulary word (requires paying \$24/year for a Forvo API key.

WaniKani Vocab Beyond is rendered on kanji lessons, kanji reviews, and kanji pages.

## Requirements

- [Tampermonkey](http://tampermonkey.net/)
- [Forvo API key](https://api.forvo.com)

## Installation

1. Install @rfindley 's WaniKani Open Framework according to [these instructions](https://github.com/rfindley/wanikani-open-framework#installation).
2. Install this script from Greasyfork at https://greasyfork.org/en/scripts/39692-wanikani-bulk-add-kanji-user-synonyms
3. (Optional) Configure your Forvo API key in the Vocab Beyond settings.

![Settings accessed from dashboard](./screenshots/settings-accessed-from-dashboard.png)

## Configuration

![Audio settings](./screenshots/settings-1-audio.png)
![Vocab settings](./screenshots/settings-2-vocab.png)
![Appearance settings](./screenshots/settings-3-appearance.png)

## Contributing

You can download the dependencies and build the script locally with:

```
git clone git@github.com:normful/wanikani-vocab-beyond.git
cd wanikani-vocab-beyond
brew install yarn
yarn
yarn build
```

Development commands:

- `yarn lint` to run `tslint`
- `yarn prettier` to automatically format with `prettier`
- `yarn test` to run `jest` tests

In development, may also want to:

- change the [webpack mode](https://github.com/normful/wanikani-vocab-beyond/blob/master/webpack.config.js#L21) to `"development"` 
- turn on [WKVB logging](https://github.com/normful/wanikani-vocab-beyond/blob/master/src/logger/logger.ts#L11)
- turn on [`gm-http` logging](https://github.com/normful/wanikani-vocab-beyond/blob/master/index.ts#L4-L5)

## Credits

Thanks @rfindley and @axetroy for the following projects that this script heavily relies on:

- https://github.com/rfindley/wanikani-open-framework
- https://github.com/axetroy/ts-gmscript-boilerplate
- https://github.com/axetroy/gm-http
