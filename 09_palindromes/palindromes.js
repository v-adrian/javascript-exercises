const palindromes = (str) => {
  const string = Array.from(str.toLowerCase())
    .filter((letter) => letter.match("[a-z0-9]"))
    .join("");
  const reverseString = Array.from(string).toReversed().join("");
  return string === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
