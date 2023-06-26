let nums = [1,2,3,3,4,3,2,12,34,5,6]
function monotonic(nums){
    for(let i=0;i<nums.length;i++){
        let el = nums[i]
        for(let j=i+1;j<nums.length;j++){
            if(nums[j]==el){
                return true
            }
        }
    }
    return false
}
console.log(monotonic(nums))