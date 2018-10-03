const builtInModules = require('../../')

export = function isBuiltInModule (moduleName: string) {
    return builtInModules.includes(moduleName)
}
