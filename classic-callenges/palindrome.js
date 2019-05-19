const palindrome = str => {
  const reverseStr = str
    .split("")
    .reverse()
    .join("");

  return str === reverseStr;
};
// console.log(palindrome("abba"));

// another way solving this palindrome problem
const palindromeAnother = str => {
  const answer = str.split("").every((item, index) => {
    return item === str[str.length - index - 1]
  });

  return answer;
};
console.log(palindromeAnother("abssa"));