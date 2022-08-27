module.exports = function check(str, bracketsConfig) {
  let stack = [];
  const openBrackets = [];
  const closeBrackets = {};

  bracketsConfig.forEach((element) => {
    openBrackets.push(element[0]);
    closeBrackets[element[1]] = element[0];
  });

  for (let i = 0; i < str.length; i++) {
    const topElement = stack[stack.length - 1];

    if (openBrackets.includes(str[i]) && (!stack.includes('|') || str[i] !== '|')) {
      if (topElement === '8' && str[i] === '8' || topElement === '7' && str[i] === '7') stack.pop();
      else stack.push(str[i]);
    } else {
      if (stack.length === 0) return false;
      if (closeBrackets[str[i]] === topElement) stack.pop();
      else return false;
    }
  }
  return stack.length === 0;
}
