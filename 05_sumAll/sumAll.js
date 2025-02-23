const sumAll = function (num1, num2) {
  let sum = 0;
  let larger = 0;
  let lesser = 0;
  if (
    !Number.isInteger(num1) ||
    !Number.isInteger(num2) ||
    num1 < 0 ||
    num2 < 0
  ) {
    return "ERROR";
  }
  if (num1 <= num2) {
    larger = num2;
    lesser = num1;
  } else {
    larger = num1;
    lesser = num2;
  }
  for (lesser; lesser <= larger; lesser++) {
    sum += lesser;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
