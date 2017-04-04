const objDepth = (obj, acc = 0) => {
    console.log('acc: ', acc);
    if (Object.keys(obj).length === 0) {
	return acc;
    }

    const foo = Object.keys(obj)
    .reduce((depths, objKey) => {
	    if (!!obj[objKey]) {
		depths = depths.concat([objDepth(obj.objKey, acc++)]);
	    }
	    console.log('depths: ', depths);
	    return depths;
	}, []);
};

const objWidth = (obj) => {
    return Object.keys(obj).length;
};

module.exports = {
    objDepth,
    objWidth,
};
