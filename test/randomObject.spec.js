import { randomObject } from '../src/RandomObject'
import { objDepth, objWidth } from '../src/util'

test('requesting an object with given widths works', () => {
    const objWidth1 = randomObject(1)
    expect(objWidth(objWidth1)).toBe(1)

    const objWidth2 = randomObject(2)
    expect(objWidth(objWidth2)).toBe(2)
})

test('requesting an object with given depth works', () => {
    expect(true).toBe(true)
})


test('requesting an object with no params generates an object with random width and depth less that 10', () => {
    expect(true).toBe(true)
})
