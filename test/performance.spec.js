import {
    randomObject
} from '../src/RandomObject'

test('measuring object generation performance', () => {
    console.time('randomObject');
    const obj = randomObject(20, 20);
    console.timeEnd('randomObject');
})
