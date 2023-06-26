let nums = [1,4,3,2]
// 1,2,3,4
function minSum(nums){
    let minsum=0
    nums.sort((a,b)=>{ return a-b})
    for(let i=0;i<nums.length;i+=2){
        minsum += Math.min(nums[i],nums[i+1]) 
    }
    return minsum
}

const result = minSum(nums)
console.log(result)