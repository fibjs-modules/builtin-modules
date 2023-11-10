import builtInModules from '../builtin-modules'

export = function getBuiltInModuleHash () {
    const hash = {} as Record<string, string[]>
    builtInModules.forEach(name => hash[name] = require(name))
    return hash
}
