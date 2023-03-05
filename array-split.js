const nums = [1,2,3,4,5,6,7,8];
const part = nums.slice(2,5);



const removed =nums.splice(2,5, 77,88);
//removed 5 elements from position 2 and then injected 77,88,99
console.log(removed)
console.log(nums)
console.log(part)
const together = nums.join(" ");
console.log(together);