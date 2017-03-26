const objDepth = (obj) => {
    if (Object.keys(obj).length === 0) {
	return 0;
    }
    return 1;
};

const objWidth = (obj) => {
    return Object.keys(obj).length;
};

module.exports = {
    objDepth,
    objWidth,
};
