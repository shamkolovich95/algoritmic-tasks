module.exports = function toReadable(number) {
  const arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const arr2 = [, , 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  const str = number.toString();

  if (number < 20) {
    return arr1[number];
  }

  if (number < 100 && str.endsWith('0')) {
    return arr2[Number(str[0])]
  }

  if (number < 100) {
    return arr2[Number(str[0])] + ' ' + arr1[Number(str[1])];
  }

  if (number >= 100 && str.endsWith('00')) {
    return arr1[Number(str[0])] + ' ' + 'hundred';
  }

  if (number >= 100 && str[1] === '0') {
    return arr1[Number(str[0])] + ' ' + 'hundred' + ' ' + arr1[Number(str[2])];
  }

  if (number >= 100 && str[1] === '1') {
    return arr1[Number(str[0])] + ' ' + 'hundred' + ' ' + arr1[Number(str[1] + str[2])];
  }

  if (number > 100 && str.endsWith('0')) {
    return arr1[Number(str[0])] + ' ' + 'hundred' + ' ' + arr2[Number(str[1])];
  }

  if (number > 100) {
    return arr1[Number(str[0])] + ' ' + 'hundred' + ' ' + arr2[Number(str[1])] + ' ' + arr1[Number(str[2])];
  }
}
