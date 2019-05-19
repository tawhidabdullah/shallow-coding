const arrayChunk = (array, size) => {
    const chunked = [];
    let len = array.length;
    let arrayMath = len % size;
    let sizeTemp1 = 0;
    let sizeTemp2 = size;
    const remainderChunk = array.slice(len - arrayMath);

    for (let i = 0; i < (len - arrayMath) / size; i++) {
        chunked.push(array.slice(sizeTemp1, sizeTemp2));
        sizeTemp1 += size;
        sizeTemp2 += size;
    }

    if (!(len % size === 0)) {
        chunked.push(remainderChunk);
    }

    return chunked;

};

// console.log(arrayChunk([1, 2, 3, 4, 5, 6, 7, 8], 2));
// output: [[1,2],[3,4],[5]]


// another way 1 to sovle the arraychunk problem 

const chunk1 = (array, size) => {
    const chunked = [];
    for (let elment of array) {
        const lastElem = chunked[chunked.length - 1]; // in first traverse the lastElem will be undefined
        if (!lastElem || lastElem.length === size) {
            chunked.push([elment]); // [[1]]
        } else {
            lastElem.push(elment);
        }
    }

    return chunked;
};


console.log(chunk1([1, 2, 3], 2));