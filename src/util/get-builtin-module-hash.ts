const builtInModules = require('../../')

export = function getBuiltInModuleHash () {
    const hash = {}
    builtInModules.forEach(name => hash[name] = require(name))
    return hash
}
