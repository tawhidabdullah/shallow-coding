let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let biggerOne = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = biggerOne;
                swapped = true;
            }
        }
    } while (swapped);
    return inputArr;
};

console.log(bubbleSort([1, 4, 2, 8, 2, 5]));