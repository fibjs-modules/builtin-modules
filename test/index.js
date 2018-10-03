const test = require('test')
test.setup()

const builtInModules = require('../lib/builtin-modules')

describe('check built-in modules', () => {
    builtInModules.forEach(moduleName => {
        it(`module ${moduleName} existed`, () => {
            assert.isObject(require(moduleName))
        })
    })
})

describe('utils', () => [
    it('is-builtin-modules', () => {
        builtInModules.forEach(moduleName => {
            assert.isTrue(
                require('../lib/util/is-builtin-module')(moduleName)
            )
        })
    })
])

test.run(console.DEBUG)
