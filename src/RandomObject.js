import { 
    objDepth, 
    objWidth, 
    random1To10,
    randomAlphaNumeric,
} from './util';


const randomObject = (width = random1To10(), depth = random1To10()) => {
    let ret = {};
    for (let i = 0; i < width; i++) {
	ret[randomAlphaNumeric()] = randomAlphaNumeric()
    }
    return ret
}

module.exports = {
    randomObject,
};
