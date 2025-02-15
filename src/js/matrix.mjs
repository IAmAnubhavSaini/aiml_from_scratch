import {
    randomIntegers as randomIntegerArray,
    randomFloats as randomFloatArray,
    integerOnes as ionesArray,
    integerZeros as izerosArray,
    floatOnes as fonesArray,
    floatZeros as fzerosArray,
} from './array.mjs';

/**
 *  Generates a matrix of random integers.
 * @param {number} rows
 * @param {number} cols
 * @param {number} upperLimit
 * @returns
 */
function randomIntegers(rows = 10, cols = 10, upperLimit = 100) {
    return Array(rows)
        .fill(0)
        .map(_ => randomIntegerArray(cols, upperLimit));
}

/**
 *  Generates a matrix of random floats.
 * @param {number} rows
 * @param {number} cols
 * @param {number} upperLimit
 * @returns
 */
function randomFloats(rows = 10, cols = 10, upperLimit = 100) {
    return Array(rows)
        .fill(0)
        .map(_ => randomFloatArray(cols, upperLimit));
}

function integerOnes(rows = 10, cols = 10) {
    return Array(rows)
        .fill(0)
        .map(_ => ionesArray(cols));
}

function integerZeros(rows = 10, cols = 10) {
    return Array(rows)
        .fill(0)
        .map(_ => izerosArray(cols));
}

function floatOnes(rows = 10, cols = 10) {
    return Array(rows)
        .fill(0)
        .map(_ => fonesArray(cols));
}

function floatZeros(rows = 10, cols = 10) {
    return Array(rows)
        .fill(0)
        .map(_ => fzerosArray(cols));
}

function eye(size = 10) {
    const mat = integerZeros(size, size);
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i === j) {
                mat[i][j] = 1;
            }
        }
    }
    return mat;
}

class AnMatrix {
    constructor(rows = 10, cols = 10, data = null) {
        this.rows = rows;
        this.cols = cols;
        this.data = (!data || data.length === 0)
            ? (Array(rows)
                .fill(0)
                .map(_ => new Array(cols).fill(0)))
            : (data);
    }
    static fromArray(array) {
        return new AnMatrix(array.length, array.length, array.map(_ => ([...array])));
    }
    static fromMatrix(matrix) {
        return new AnMatrix(matrix.length, matrix[0].length, matrix);
    }
    add(x) {
        if (typeof (x) !== 'number') {
            throw Error('ERROR: Cannot add a non-number.');
        }
        return AnMatrix.fromMatrix(this.data.map(row => row.map(val => val + x)));
    }
    multiply(x) {
        if (typeof (x) !== 'number') {
            throw Error('ERROR: Cannot multiply a non-number.');
        }
        return AnMatrix.fromMatrix(this.data.map(row => row.map(val => val * x)));
    }
    divide(x) {
        if (x === 0) {
            throw new Error("ERROR: Cannot divide by zero.");
        }
        if (typeof (x) !== 'number') {
            throw new Error("ERROR: Cannot divide by a non-number.");
        }
        return AnMatrix.fromMatrix(this.data.map(row => row.map(val => val / x)));
    }
}

export {
    eye,
    floatOnes,
    floatZeros,
    integerOnes,
    integerZeros,
    randomFloats,
    randomIntegers,
    AnMatrix,
}
