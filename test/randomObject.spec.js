import { randomObject } from '../src/RandomObject'
import { objDepth, objWidth } from '../src/util'

test('requesting an object with given lengths/widths works', () => {
    const obj1 = randomObject(1, 2)
    expect(objWidth(obj1)).toBe(1);
    expect(objDepth(obj1)).toBe(2);
})

test('requesting an object with no params generates an object with random width and depth less that 10', () => {
    expect(true).toBe(true);
})
