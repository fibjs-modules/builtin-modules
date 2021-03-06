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
}

const internalModuleNameList = builtInfo.modules && builtInfo.modules.length ? builtInfo.modules : null

const moduleList = 
    internalModuleNameList ?
        internalModuleNameList : 
        (fibjsVersion && builtInModulesVersionMap[fibjsVersion] ? builtInModulesVersionMap[fibjsVersion] : builtInModulesVersionMap['default']);

;(moduleList as any).default = moduleList
export = moduleList
