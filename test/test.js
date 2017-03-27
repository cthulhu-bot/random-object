import {objDepth, objWidth}  from '../index';


test('empty object should have a length of 0', () => {
    expect(objDepth({})).toBe(0);
});

test('empty object should have a width of 0', () => {
    expect(objWidth({})).toBe(0);
});

test('object containing no other objects should return 1', () => {
    expect(objDepth({a : 'a'}, 0)).toBe(1);
});

test('object contain a single object should return 2', () => {
    expect(objDepth({a : {b : 'b' }}, 0)).toBe(2)
});
