const object = {
    "one": {
        "nest1": {
            "val1": [9, 34, 92, 100]
        }
    },
    "2f7": {
        "n1": [10, 92, 53, 71],
        "n2": [82, 34, 6, 19]
    }
};

function getRootProperty(object, val) {
    for (const key in object) {
        if (Array.isArray(object[key]) && object[key].includes(val)) {
            return key;
        } else if (typeof object[key] === 'object') {
            const result = getRootProperty(object[key], val);
            if (result !== null) {
                return key;
            }
        }
    }
    return null;
}

console.log(checkTarget(object, 19));
