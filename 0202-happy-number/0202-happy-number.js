/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  if (n === 1 || n === 7) {
    return true
  }
  if (n < 10) {
    return false
  }
  let narr = (n + '').split(''), sum = 0
  for (let i = 0;i < narr.length; i++) {
    sum = narr[i] * narr[i] + sum
  }
  return isHappy(sum)
};
