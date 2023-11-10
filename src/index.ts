/// <reference types="@fibjs/types" />

import './util/get-builtin-module-hash';
import './util/is-builtin-module';

import builtInModules = require('./builtin-modules')

export = builtInModules;

// export * from './util/get-builtin-module-hash';
// export * from './util/is-builtin-module';