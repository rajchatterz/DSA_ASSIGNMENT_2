const nums = [1, 3, 2, 2, 5, 2, 3, 7];
function maxDistinctElements(nums) {
    const frequencyMap = {};
    
    
    for (let i = 0; i < nums.length; i++) {
        frequencyMap[nums[i]] = (frequencyMap[nums[i]] || 0) + 1;
    }
    
    let maxCount = 0;
    
    
    for (let count of Object.values(frequencyMap)) {
        maxCount = Math.max(maxCount, count);
    }
    
    return nums.length - maxCount;
}


const maxDistinct = maxDistinctElements(nums);
console.log(maxDistinct); 