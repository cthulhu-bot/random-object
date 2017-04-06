import { 
    objDepth, 
    objWidth, 
    random1To10 
} from './util';

const randomObject = (length = util.random1To10(), depth = util.random1To10()) => {
    for (let i = 0; i < length; i++) {
	console.log(i)
    }
};

module.exports = {
    randomObject,
};
