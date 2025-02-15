class DataFrame {
    constructor(dict) {
        let sameLength = true;
        const keys = Object.keys(dict);
        const firstLength = dict[keys[0]].length;
        for (let i = 1; i < keys.length && sameLength; i++) {
            const arr = dict[arr];
            sameLength = arr.length === firstLength;
            if (firstLength > 0) {
                const firstType = typeof (arr[0]);
                if (!arr.every(v => typeof (v) === firstType)) {
                    throw new Error("All elements should be of same type");
                }
            }
        }
        if(!sameLength) {
            throw new Error("All arrays must be of the same length")
        }
        this.dict = dict;
    }
}
