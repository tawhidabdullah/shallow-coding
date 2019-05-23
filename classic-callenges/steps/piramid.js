const piramid0 = (n) => {
    const midPoint = Math.floor((2 * n - 1) / 2);
    for (let row = 0; row < n; row++) {
        let level = "";
        for (let collumn = 0; collumn < (2 * n - 1); collumn++) {
            if (midPoint - row <= collumn && midPoint + row >= collumn) {
                level += "#"
            } else level += " "
        }
        console.log(level);
    }
};
// console.log(piramid0(50));

const piramid1 = (n, row = 0, level = '') => {

    if (row === n) return;
    if (level.length === (2 * n - 1)) {
        console.log(level);
        return piramid1(n, row + 1);
    }

    const midPoint = Math.floor((2 * n - 1) / 2);
    let add;
    if (midPoint - row <= level.length && midPoint + row >= level.length) {
        add = "#";
    } else add = " ";
    piramid1(n, row, level + add);
};


console.log(piramid1(50));
