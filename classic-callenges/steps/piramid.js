const piramid = (n) => {
    const midPoint = Math.floor((2 * n - 1) / 2); // 2
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
console.log(piramid(5));