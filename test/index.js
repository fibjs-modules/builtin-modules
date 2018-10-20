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

describe('utils', () => {
    it('is-builtin-module', () => {
        builtInModules.forEach(moduleName => {
            assert.isTrue(
                require('../lib/util/is-builtin-module')(moduleName)
            )
        })
    })

    it('get-builtin-module-hash', () => {
        const hash = require('../lib/util/get-builtin-module-hash')()

        assert.equal(Object.keys(hash).length, builtInModules.length)
        assert.deepEqual(Object.keys(hash).sort(), builtInModules.sort())
    })
})

test.run(console.DEBUG)
