const objDepth = (obj, acc = 0) => {
    console.log('acc:', acc);
    console.log('obj:', obj);
    if (Object.keys(obj).length === 0 || acc > 0) {
	return acc;
    }
    return Object.keys(obj).map((objKey) => {
	return objDepth(obj[objKey], ++acc);
    });
};

const objWidth = (obj) => {
    return Object.keys(obj).length;
};

module.exports = {
    objDepth,
    objWidth,
};
