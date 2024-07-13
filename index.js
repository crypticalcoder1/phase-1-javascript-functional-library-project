// myEach
const myEach = (collection, callback) => {
    const items = Array.isArray(collection) ? collection : Object.values(collection);
    for (let item of items) {
        callback(item);
    }
    return collection; // Return the original collection
};

// myMap
const myMap = (collection, callback) => {
    const items = Array.isArray(collection) ? collection : Object.values(collection);
    return items.map((item, index) => {
        return callback(item, Array.isArray(collection) ? undefined : Object.keys(collection)[index]);
    });
};

// myReduce
const myReduce = (collection, callback, acc) => {
    const items = Array.isArray(collection) ? collection : Object.values(collection);
    let startIndex = 0;

    if (acc === undefined) {
        acc = items[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < items.length; i++) {
        acc = callback(acc, items[i], collection);
    }
    return acc;
};

// myFind
const myFind = (collection, predicate) => {
    const items = Array.isArray(collection) ? collection : Object.values(collection);
    for (let item of items) {
        if (predicate(item)) {
            return item;
        }
    }
    return undefined;
};

// myFilter
const myFilter = (collection, predicate) => {
    const items = Array.isArray(collection) ? collection : Object.values(collection);
    return items.filter(item => predicate(item));
};

// mySize
const mySize = (collection) => {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
};
// myFirst
const myFirst = (array, n) => {
    return n === undefined ? array[0] : array.slice(0, n);
};

// myLast
const myLast = (array, n) => {
    return n === undefined ? array[array.length - 1] : array.slice(-n);
};
// mySortBy
const mySortBy = (array, callback) => {
    return [...array].sort((a, b) => {
        const valA = callback(a);
        const valB = callback(b);
        if (valA < valB) return -1;
        if (valA > valB) return 1;
        return 0;
    });
};

// myFlatten
const myFlatten = (array, shallow = false, newArr = []) => {
    for (let item of array) {
        if (Array.isArray(item)) {
            if (shallow) {
                newArr.push(...item);
            } else {
                myFlatten(item, shallow, newArr);
            }
        } else {
            newArr.push(item);
        }
    }
    return newArr;
};
// myKeys
const myKeys = (object) => {
    return Object.keys(object);
};

// myValues
const myValues = (object) => {
    return Object.values(object);
};
