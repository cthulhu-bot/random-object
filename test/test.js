import {objDepth, objWidth}  from '../src/core';

test('empty object should have a width of 0', () => {
    expect(objWidth({})).toBe(0);
});

test('empty object should have a depth of 0', () => {
    expect(objDepth({})).toBe(0);
});

test('object containing no other object values should return a depth of 0', () => {
	expect(objDepth({a: 'a'})).toBe(0);
});

test('object contain a single object should return a depth of 1', () => {
    expect(objDepth({a: {b: 'b' }})).toBe(1)
});

test('object containing two object should still return a depth of 1', () => {
    expect(objDepth({a: {b: 'b' }, c: {d: 'd'}})).toBe(1)
});
