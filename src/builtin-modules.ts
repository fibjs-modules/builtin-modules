/// <reference types="@fibjs/types" />

import util = require('util')

const builtInfo: any = util.buildInfo()

const fibjsVersion = builtInfo.fibjs

const builtInModulesVersionMap = {
    "default": [ "zmq", "zlib", "zip", "xml", "ws", "vm", "uuid", "util", "url", "tty", "timers", "test", "string_decoder", "tls", "ssl", "querystring", "punycode", "profiler", "process", "path", "os", "net", "mq", "json", "io", "iconv", "https", "http", "hex", "hash", "gd", "fs", "events", "encoding", "dns", "dgram", "db", "crypto", "coroutine", "buffer", "bson", "base64vlq", "base64", "base32", "assert" ],
    "0.26.1": [ "zmq", "zlib", "zip", "xml", "ws", "vm", "uuid", "util", "url", "tty", "timers", "test", "string_decoder", /* "tls", */ "ssl", "querystring", "punycode", "profiler", "process", "path", "os", "net", "mq", "json", "io", "iconv", /* "https", */ "http", "hex", "hash", "gd", "fs", "events", "encoding", "dns", "dgram", "db", "crypto", "coroutine", "buffer", "bson", "base64vlq", "base64", "base32", "assert" ],
    "0.26.0": [ "zmq", "zlib", "zip", "xml", "ws", "vm", "uuid", "util", "url", "tty", "timers", "test", "string_decoder", /* "tls", */ "ssl", "querystring", "punycode", "profiler", "process", "path", "os", "net", "mq", "json", "io", "iconv", /* "https", */ "http", "hex", "hash", "gd", "fs", "events", "encoding", "dns", "dgram", "db", "crypto", "coroutine", "buffer", "bson", "base64vlq", "base64", "base32", "assert" ],
    "0.25.0": [ "zmq", "zlib", "zip", "xml", "ws", "vm", "uuid", "util", "url", "tty", "timers", "test", "string_decoder", /* "tls", */ "ssl", "querystring", "punycode", "profiler", "process", "path", "os", "net", "mq", "json", "io", "iconv", /* "https", */ "http", "hex", "hash", "gd", "fs", "events", "encoding", "dns", "dgram", "db", "crypto", "coroutine", "buffer", "bson", "base64vlq", "base64", "base32", "assert" ],
    "0.24.0": [ "zmq", "zlib", "zip", "xml", "ws", "vm", "uuid", "util", "url", "tty", "timers", "test", "string_decoder", /* "tls", */ "ssl", "querystring", "punycode", "profiler", "process", "path", "os", "net", "mq", "json", "io", "iconv", /* "https", */ "http", "hex", "hash", "gd", "fs", "events", "encoding", "dns", "dgram", "db", "crypto", "coroutine", "buffer", "bson", "base64vlq", "base64", "base32", "assert" ],
    "0.23.0": [ "zmq", "zlib", "zip", "xml", "ws", "vm", "uuid", "util", "url", "tty", "timers", "test", "string_decoder", /* "tls", */ "ssl", "querystring", "punycode", "profiler", "process", "path", "os", "net", "mq", "json", "io", "iconv", /* "https", */ "http", "hex", "hash", "gd", "fs", "events", "encoding", "dns", "dgram", "db", "crypto", "coroutine", "buffer", "bson", "base64vlq", "base64", "base32", "assert" ],
    "0.22.0": [ "zmq", "zlib", "zip", "xml", "ws", "vm", "uuid", "util", "url", "tty", "timers", "test", "string_decoder", /* "tls", */ "ssl", "querystring", "punycode", "profiler", "process", "path", "os", "net", "mq", "json", "io", "iconv", /* "https", */ "http", "hex", "hash", "gd", "fs", "events", "encoding", "dns", "dgram", "db", "crypto", "coroutine", "buffer", "bson", "base64vlq", "base64", "base32", "assert" ],
    "0.21.0": [ "zmq", "zlib", "zip", "xml", "ws", "vm", "uuid", "util", "url", "tty", "timers", "test", "string_decoder", /* "tls", */ "ssl", "querystring", "punycode", "profiler", "process", "path", "os", "net", "mq", "json", "io", "iconv", /* "https", */ "http", "hex", "hash", "gd", "fs", "events", "encoding", "dns", /* "dgram", */ "db", "crypto", "coroutine", "buffer", "bson", "base64vlq", "base64", "base32", "assert" ]
} as Record<string, string[]>

// since 0.37.0, builtInfo.fibjsBuiltins, builtInfo.builtins is available
let internalModuleNameList: string[] | null = null;

if (Array.isArray(builtInfo.builtins) && builtInfo.builtins.length) {
    internalModuleNameList = builtInfo.builtins
} else if (Array.isArray(builtInfo.fibjsBuiltins) && builtInfo.fibjsBuiltins.length) {
    internalModuleNameList = builtInfo.fibjsBuiltins
} else if (Array.isArray(builtInfo.modules) && builtInfo.modules.length) {
    internalModuleNameList = builtInfo.modules
}

type ModuleList = string[] & {
    default: ModuleList;
}

const moduleList = (
    internalModuleNameList ?
        internalModuleNameList : 
        (fibjsVersion && builtInModulesVersionMap[fibjsVersion] ? builtInModulesVersionMap[fibjsVersion] : builtInModulesVersionMap['default'])) as ModuleList;

moduleList.default = moduleList

export = moduleList;
