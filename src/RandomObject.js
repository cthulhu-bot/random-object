import { 
    objDepth, 
    objWidth, 
    random1To10 
} from './util';

const randomObject = (width = util.random1To10(), depth = util.random1To10()) => {
    for (let i = 0; i < width; i++) {
    }
    return {a: {b: {c: 'c'}}}
}

module.exports = {
    randomObject,
};
