const palindromes = function (str) {
  const string = Array.from(str.toLowerCase()).filter((letter) =>
    letter.match("[a-z0-9]")
  );
  const reverseString = string.toReversed();
  return string.every((value, index) => value === reverseString[index]);
};

// Do not edit below this line
module.exports = palindromes;
