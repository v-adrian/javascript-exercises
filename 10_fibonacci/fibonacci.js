const fibonacci = (index) => {
  let num = +index;
  if (num < 0) return "OOPS";
  if (num === 0) return 0;
  if (num === 1) return 1;
  let a = 0;
  let b = 1;
  let c;
  for (let i = 2; i <= num; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
};

// Do not edit below this line
module.exports = fibonacci;
