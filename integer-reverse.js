function integerReverse(x) {
  
  const reversedString = x.toString().split("").reverse().join("");
  const reversedInt = Math.sign(x) * parseInt(reversedInt);

  return reversedInt < Math.pow(-2, 31) || reversedInt > (Math.pow(2, 31 - 1) )
    ? 0 : reversedInt;
}