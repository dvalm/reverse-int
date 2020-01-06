module.exports = function reverse (n) {
  let str = "" + Math.abs(n);
  let result = 0;
  for(let i = 0; i < str.length; i++){
	result += Math.pow(10,i) * parseInt(str[i]);
  }
  return result;
}
