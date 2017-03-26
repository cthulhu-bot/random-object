import {objDepth, objWidth}  from '../index';


test('empty object should have a length of 0', () => {
    expect(objDepth({})).toBe(0);
});

test('empty object should have a width of 0', () => {
    expect(objWidth({})).toBe(0);
});
