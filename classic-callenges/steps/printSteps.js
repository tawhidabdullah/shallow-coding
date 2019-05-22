const printSteps1 = (n) => {
    for (let row = 0; row < n; row++) {
        let stair = "";
        for (let column = 0; column < n; column++) {
            if (column <= row) stair += "#"
            else stair += ' '
        }
        console.log(stair);
    }
};
// console.log(printSteps1(3));

const recursionPrintSteps = (n = 3, row = 0, stair = "") => {
    if (n === row) return;
    if (n === stair.length) {
        console.log(stair);
        return recursionPrintSteps(n, row + 1);
    }
    if (stair.length <= row) stair += "#";
    else stair += " ";
    recursionPrintSteps(n, row, stair);
};
console.log(recursionPrintSteps(3));