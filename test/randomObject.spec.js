import { randomObject } from '../src/RandomObject'
import { objDepth, objWidth } from '../src/util'

test('requesting an object with given widths works', () => {
    const objWidth0 = randomObject(0, 0)
    expect(objWidth(objWidth0)).toBe(0)

    const objWidth1 = randomObject(1, 0)
    expect(objWidth(objWidth1)).toBe(1)

    const objWidth2 = randomObject(2, 0)
    expect(objWidth(objWidth2)).toBe(2)
})

test('requesting an object with given depth works', () => {
    const objDepth0 = randomObject(1, 0)
    expect(objDepth(objDepth0)).toBe(0)

    const objDepth1 = randomObject(1, 1)
    expect(objDepth(objDepth1)).toBe(1)

    const objDepth2 = randomObject(1, 2)
    expect(objDepth(objDepth2)).toBe(2)
})

test('requesting an object with no params generates an object with random width and depth less that 10', () => {
    const obj = randomObject()
    expect(objWidth(obj)).toBeLessThanOrEqual(10)
    expect(objDepth(obj)).toBeLessThanOrEqual(10)
})
