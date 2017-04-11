# Generates a js object of random width and depth for testing purposes

[![Build Status](https://circleci.com/gh/cthulhu-bot/random-object.svg?style=shield&circle-token=8fee310ddb2131b781430227252018b430baa094)](https://circleci.com/gh/cthulhu-bot/random-object)
[![npm version](https://badge.fury.io/js/random-object.svg)](https://badge.fury.io/js/random-object)

### Installation
```javascript
npm install random-object
```

### Import
```javascript
// require
var rand = require('random-object');

// ES6 import
import { randomObject } from 'random-object';
```

### Usage
```javascript
const rand = randomObject(width, depth)
```

Generates a javascript object of a given width and depth. Width indicating the number of object keys and depth indicating the number of nested objects. The generated object will always contain one object of the specified object depth and all other nested objects will be of depth less than or equal to the specified depth. All keys and values are length 5 randomized alphanumeric strings.

```javascript
// Examples
> const rand = randomObject(0, 1)
> rand
{}

> const rand = randomObject(1, 0)
> rand
{ H13Q9: '81C0B' }

> const rand = randomObject(1, 1)
> rand
{ '0TB0G': { D8U6L: 'X67ZP' } }

> const rand = randomObject(1, 2)
> rand
{ '1RIC6': { CY4JC: { '0UHR5': 'DDWYD' } } }

> const rand = randomObject(2, 2)
> rand
{ P2M2U: { TY4S2: { YT4SE: 'XGBU2' } }, Q1P3O: 'NGX33' }

// note: console.log will not print out any object depth >= 3 instead defaulting to the [Object] representation
```

If no parameters are provided a randomized width and depth <= 10 will be generated

```javascript
> const rand = randomObject()
> rand
{ KLJWM: { QS3KQ: { OW5OL: 'WZI7D' } },
  JJQAU: 'BWROC',
  R32PA: 'NUXWK',
  '72N1B': '2ODC8',
  U3ZOQ: { BWZGE: { M5QJZ: '0G90X' } },
  '553HP': { KICGF: { II09S: 'I05TP' } },
  '754E7': '2Z2U1' }

> const rand = randomObject()
> rand
{ '179NX': { '7OCV5': { NUA46: [Object] } },
  XDKX1: { OT0Y7: { J2I3S: [Object] } },
  J8QGH: 'O0CAL',
  MXK76: '0PYKQ',
  DANX0: { GA98E: { '80BBW': 'SMV6Z' } },
  '8JGZD': 'HIY8B',
  LBE37: 'UNC1X',
  F2Y6M: 'MKYLK',
  YR10Q: '32ZA6',
  '2Q62Y': 'H85CN' }
```

* [Github](https://github.com/cthulhu-bot/random-object)
* [CircleCI](https://circleci.com/gh/cthulhu-bot/random-object)
* [NPM Package Repo](https://www.npmjs.com/package/random-object)
