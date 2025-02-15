function randomIntegers(len = 10, upperLimit = 100) {
    return Array(len).fill(0).map(_ => Math.floor(Math.random() * upperLimit));
}

function randomFloats(len = 10, upperLimit = 100) {
    return Array(len).fill(0).map(_ => Math.random() * upperLimit);
}

function integerOnes(len = 10) {
    return Array(len).fill(1).map(_ => 1);
}

function floatOnes(len = 10) {
    return Array(len).fill(1.0).map(_ => 1.0);
}

function integerZeros(len = 10) {
    return Array(len).fill(0).map(_ => 0);
}

function floatZeros(len = 10) {
    return Array(len).fill(0.0).map(_ => 0.0);
}

function integerRange(upto = 10, step = 1, start = 0) {
    const out = [];
    for (let i = start; i < upto; i += step) {
        out.push(i);
    }
    return out;
}

function floatRange(upto = 10.0, step = 1.0, start = 0.0) {
    const out = [];
    for (let i = start; i < upto; i += step) {
        out.push(i);
    }
    return out;
}

function shuffleStrict(array, indices) {
    if (array.length !== indices.length) {
        throw new Error("ERROR: Cannot shuffle arrays with different lengths. Please ensure that the array and indices have the same length.");
    }
    const out = [];
    for (let i = 0; i < array.length; i++) {
        out[i] = array[indices[i]];
    }
    return out;
}

function shuffle(array, indices) {
    if (array.length === 0 || indices.length === 0) {
        throw new Error("ERROR: Cannot shuffle empty arrays. Please ensure that the array and indices are not empty.");
    }
    const out = [];
    const shuffleLength = indices.length;
    for (let i = 0; i < array.length; i++) {
        out[i] = array[indices[i % shuffleLength]];
    }
    return out;
}

class AnArray {
    constructor(size = 10, type = 'number', values = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) {
        const tyyp = typeof (arr[0]);
        if (!(arr.every(v => typeof (v) === tyyp))) {
            throw new Error("ERROR: AnArray cannot contain different types of values.");
        }
        this.size = size;
        this.type = type;
        this.values = values;
    }
    static fromArray(arr) {
        const size = arr.size;
        const type = tyyp;
        return new AnArray(size, type, arr);
    }
    multiply(x) {
        if (!(typeof (x) === typeof (this.type))) {
            throw new Error("ERROR: Cannot multiply different types.");
        }
        return AnArray.fromArray(this.values.map(v => v * x));
    }
    add(x) {
        if (!(typeof (x) === typeof (this.type))) {
            throw new Error("ERROR: Cannot add different types.");
        }
        return AnArray.fromArray(this.values.map(v => v + x));
    }
    divide(x) {
        if (x === 0) {
            throw new Error("ERROR: Cannot divide by zero yet.");
        }
        if (!(typeof (x) === typeof (this.type))) {
            throw new Error("ERROR: Cannot divide different types.");
        }
        return AnArray.fromArray(this.values.map(v => v / x));
    }
}

export {
    floatOnes,
    floatRange,
    floatZeros,
    integerOnes,
    integerRange,
    integerZeros,
    randomFloats,
    randomIntegers,
    shuffle,
    shuffleStrict,
    AnArray
}
