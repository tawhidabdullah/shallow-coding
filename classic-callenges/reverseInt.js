const reverseInt = (num) => {
    const tempRevInt = num.toString().split('').reverse().join('');
    const finalRevInt = Math.sign(num) === 1 ? parseInt(tempRevInt) : parseInt(tempRevInt) * -1;
    return finalRevInt;
};
// console.log(reverseInt(-500));


const maxChar = (str) => {
    const strItemCounter = {};
    for (let char of str) {
        strItemCounter[char] = strItemCounter[char] + 1 || 1;
    }
    const getMostRepeatedStr = (strObj) => {
        let num = 0;
        let obj = {};
        for (let key in strObj) {
            if (strObj[key] > num) {
                num = strObj[key]
                obj = {
                    [key]: strObj[key]
                }
            }
        }
        return obj;

    };

    return getMostRepeatedStr(strItemCounter);
};
console.log(maxChar('aadccc'));