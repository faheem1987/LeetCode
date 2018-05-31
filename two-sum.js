//Given an array of integers, return indices of the two numbers such that they add up to a specific target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//Given nums = [2, 7, 11, 15], target = 9,

//Because nums[0] + nums[1] = 2 + 7 = 9,
//return [0, 1].


function twoSum(array, target) {
  const hash = {};
  let result;

  array.some((element, i) => {
    const res = hash[target - element];
    if(res !== undefined) {
      result = [res, i];
      return true;
    }
    hash[array[i]] = i;
  })

  return result;
}
