const getCharMaps = (str) => {
    const charMaps = {};

    for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
        charMaps[char] = charMaps[char] + 1 || 1;
    }
    return charMaps;
};

const isAnagrams1 = (str1, str2) => {
    const charMaps1 = getCharMaps(str1);
    const charMaps2 = getCharMaps(str2);

    if (Object.keys(charMaps1).length !== Object.keys(charMaps2).length) return false;

    for (let char in charMaps1) {
        if (charMaps1[char] !== charMaps2[char]) return false;
    }

    return true;
};

// console.log(isAnagrams1('heyfsd!!!!', 'yfdeh'));

///////// ANOTHER WAY OF SOLVING THIS ANAGRAM PROBLEM 

const cleaningStr = (str) => {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

const isAnagrams2 = (str1, str2) => {
    const cleanStr1 = cleaningStr(str1);
    const cleanStr2 = cleaningStr(str2);

    return cleanStr1 === cleanStr2;

};

console.log(isAnagrams2('hey', 'yeh'));