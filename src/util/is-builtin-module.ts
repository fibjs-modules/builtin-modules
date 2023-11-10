import builtInModules from '../builtin-modules'

export = function isBuiltInModule (moduleName: string) {
    return builtInModules.includes(moduleName)
}
