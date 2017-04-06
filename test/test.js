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

test('object containing a single object should return a depth of 1', () => {
    expect(objDepth({a: {b: 'b' }})).toBe(1)
});

test('object containing two surface level objects should still return a depth of 1', () => {
    expect(objDepth({a: {b: 'b' }, c: {d: 'd'}})).toBe(1)
});

test('object containing two nested objects should return a depth of 2', () => {
    expect(objDepth({a: {b: {c: 'c'}}})).toBe(2)
});

test('object containing three nested objects should return a depth of 3', () => {
    expect(objDepth({a: {b: {c: {d: 'd'}}}})).toBe(3)
});
