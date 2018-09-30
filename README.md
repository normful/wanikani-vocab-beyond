# WaniKani Vocab Beyond

## Description

This [WaniKani](https://www.wanikani.com) script displays much more vocabulary than is included in WaniKani, by using Jim Breen's [WWWJDIC](http://nihongo.monash.edu/cgi-bin/wwwjdic) API. It also allows you to listen to native speaker pronunciations from [Forvo](https://forvo.com/), if you pay the \$24/year Forvo API key fee.

## Requirements

- [Tampermonkey](http://tampermonkey.net/)
- [Forvo API key](https://api.forvo.com)

## Installation

1. Install @rfindley 's WaniKani Open Framework according to [these instructions](https://github.com/rfindley/wanikani-open-framework#installation).
2. Install this script from Greasyfork at https://greasyfork.org/en/scripts/39692-wanikani-bulk-add-kanji-user-synonyms
3. (Optional) Configure your Forvo API key in the Vocab Beyond settings.

TODO: Screenshot link

## Usage


## Contributing

You can build the script locally with:

```
git clone git@github.com:normful/wanikani-vocab-beyond.git
yarn
yarn build
```

Development commands:

- `yarn lint` to run TSLint
- `yarn prettier` to automatically format with `prettier`
- `yarn test` to run `jest` tests

In development, may also want to:

- change the webpack mode to `"development"` 
- turn on WKVB logging
- turn on `gm-http` logging

## Credits

Thanks @rfindley and @axetroy for the following projects that this script heavily relies on:

- https://github.com/rfindley/wanikani-open-framework
- https://github.com/axetroy/ts-gmscript-boilerplate
- https://github.com/axetroy/gm-http
