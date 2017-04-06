// Depth: number of nested object in a given object
const objDepth = (obj, acc = 0) => {
    // Filter object by keys containing child objects
    const objectValues = Object.keys(obj).filter(key => { return typeof obj[key] === 'object' })
    // if no child objects are found return the current object depth
    if (objectValues.length === 0)
	return acc;

    // else recursively call objDepth increasing the current object depth
    // compile these depths into an array of each key's final discovered child object depth
    // finally return the maximum depth discovered
    return objectValues.reduce((keyDepths,key) => { 
	                 const ret = keyDepths.concat(objDepth(obj[key], ++acc))
                         acc = 0
                         return ret }, [])
                       .reduce((a,b) => (Math.max(a,b)))
};

// Width: number of keys in a given object
const objWidth = (obj) => {
    return Object.keys(obj).length;
};

const getRandom1To10 = () => {
    return Math.floor(Math.random() * 10) + 1
};

module.exports = {
    objDepth,
    objWidth,
    getRandom1To10,
};