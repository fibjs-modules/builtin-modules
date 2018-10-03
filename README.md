# @fibjs/builtin-modules

[![Build Status](https://travis-ci.org/fibjs-modules/builtin-modules.svg)](https://travis-ci.org/fibjs-modules/builtin-modules)
[![NPM version](https://img.shields.io/npm/v/@fibjs/builtin-modules.svg)](https://www.npmjs.org/package/@fibjs/builtin-modules)

> List of the [FibJS] builtin modules

## Pre-requisite

- `fibjs >= 0.21.0`

## Usage

```javascript
const builtinModules = require('builtin-modules');

console.log(builtinModules);
//=> ['assert', 'buffer', ...]
```

## API

Returns an array of builtin modules fetched from the running [FibJS] version.

## License

[GPL-3.0](https://opensource.org/licenses/GPL-3.0)

Copyright (c) 2018-present, Richard

[FibJS]:https://github.com/fibjs/fibjs
