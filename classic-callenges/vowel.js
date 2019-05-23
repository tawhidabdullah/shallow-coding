const vowel = (str) => {
    let vowelCounter = 0;
    let vowelChecker = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str.toLowerCase()) {
        if (vowelChecker.includes(char)) {
            vowelCounter++;
        }
    }

    return vowelCounter;
};

// console.log(vowel('stop your crying, it will be all right')); // should return the quantity of vowels 

// another way solve the vowelOrConsonents 
const vowelRegX = (str) => {
    let matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;

};

console.log(vowelRegX('stop your crying, it will be all right')); // should return the quantity of vowels 