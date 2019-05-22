const capitalize = (str) => {
    const capitalizeStr = str.split(" ");
    return capitalizeStr.map(e => {
        return e.charAt(0).toUpperCase() + e.slice(1);
    }).join(" ");
};

console.log(capitalize('my name is tawhid abdullah'));