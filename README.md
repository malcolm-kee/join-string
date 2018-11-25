# join-string

[![version](https://img.shields.io/npm/v/join-string.svg)](https://www.npmjs.com/package/join-string) ![license](https://img.shields.io/npm/l/join-string.svg) ![build](https://travis-ci.org/malcolm-kee/join-string.svg?branch=master) [![Coverage Status](https://coveralls.io/repos/github/malcolm-kee/join-string/badge.svg?branch=master)](https://coveralls.io/github/malcolm-kee/join-string?branch=master)

<p align="center" style="font-size:1.2rem">Joining string/classes with specified delimiter.</p>

<hr />

## Example

```js
import joinString from 'join-string';

const joinFn = joinString(', ');
const isTrue = true;
const isFalse = false;
const result = joinFn('a', 'b', isTrue && 'c', isFalse && 'd', undefined);

console.log(result); // "a, b, c"
```

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `dependencies`:

```
npm install --save join-string
```

or

```
yarn add join-string
```

## API

### `joinString: (delimiter: string) => (...items: any[]) => string`

`joinString` is a higher-order function that accepts `delimiter` as parameter and returns a joining function that will join all its parameters with the delimiter.

The filtering rule of the joining functions are:

1. `string` will be included except when it is an empty string (`""`);
2. `number` will be included
3. `null`, `undefined`, and `boolean` will be ignored. This allows you to provide optional strings or conditional string with ternary expression.
4. `array` will be flattened and filtered based on the rules above.

`joinString` is available with `import joinString from 'join-string'` or `import { joinString } from 'join-string'`, based on your preference.

### `joinClass: (...classNames: any[]) => string`

`joinClass` is an utility to construct className. It join all its parameter with a space.

Under the hood, `joinClass` is just `joinString(' ')`.

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
