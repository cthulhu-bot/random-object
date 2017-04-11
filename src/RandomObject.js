import { 
    objDepth, 
    objWidth, 
    random1To10,
    randomMax,
    randomAlphaNumeric,
} from './util';


const randomObject = (width = random1To10(), depth = random1To10()) => {
    let ret = {}
    if (width === 0) {
	return ret
    }
    else if (depth === 0) {
	for (let i = 0; i < width; i++) {
	    ret[randomAlphaNumeric()] = randomAlphaNumeric()
	}
    }
    else {
	ret[randomAlphaNumeric()] = singleWidthObject(depth-1)
    
	for (let i = 0; i < width-1; i++) {
	    if (random1To10() > 5) {
		ret[randomAlphaNumeric()] = randomAlphaNumeric()
	    } else {
		ret[randomAlphaNumeric()] = singleWidthObject(randomMax(depth-1))
	    }
	}
    }
    return ret
}

const singleWidthObject = (depth) => {
    let ret = {}
    ret[randomAlphaNumeric()] = depth === 0 ? randomAlphaNumeric() : singleWidthObject(depth-1)
    return ret
}

module.exports = {
    randomObject,
}
