function add(numbers) {
    if (numbers === '') return 0;
  
    const delimiters = /[,\n]/;
    const nums = numbers.split(delimiters).map(n => parseInt(n, 10));
    return nums.reduce((sum, num) => sum + num, 0);
  }
  
  module.exports = { add };
  