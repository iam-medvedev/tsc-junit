[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-f8bc45.svg)](https://github.com/prettier/prettier)
[![npm version](https://badge.fury.io/js/tsc-junit.svg)](https://www.npmjs.com/package/tsc-junit)
[![Codecov](https://img.shields.io/codecov/c/github/iam-medvedev/tsc-junit)](https://codecov.io/gh/iam-medvedev/tsc-junit)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# tsc-junit

JUnit report generator for typescript

## Install

```bash
$ yarn add -D tsc-junit
```

## Usage

`package.json`:

```ts
{
  "scripts": {
    "types": "tsc --noEmit | tsc-junit --output report.xml"
  }
}
```

Then run:

```bash
$ yarn types
```

Your report will be saved to a file `report.xml`

## License

`tsc-junit` is [WTFPL licensed](./LICENSE).
