const getCharMaps = (str) => {
    const charMaps = {};

    for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
        charMaps[char] = charMaps[char] + 1 || 1;
    }
    return charMaps;
};

const isAnagram = (str1, str2) => {
    const charMaps1 = getCharMaps(str1);
    const charMaps2 = getCharMaps(str2);

    if (Object.keys(charMaps1).length !== Object.keys(charMaps2).length) return false;

    for (let char in charMaps1) {
        if (charMaps1[char] !== charMaps2[char]) return false;
    }

    return true;
};


console.log(isAnagram('heyfsd!!!!', 'yfdeh'));